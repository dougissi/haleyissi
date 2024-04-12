import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Stack } from '@mui/material';
import LinkCard from './LinkCard';

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT23YXn_vr-8ahhQhxNXDJLi9ncssbPb808J57PyBoXh6fUVcnjwl5UKSzcZmiMkfx2eczpgcWMSeFD/pub?output=csv';


function CoffeeProductsFetcher() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(GOOGLE_SHEET_CSV_URL); // Replace 'API_ENDPOINT' with your API URL
                const csvData = await response.text();
                // console.log(csvData)
                
                // Parse CSV to JSON
                Papa.parse(csvData, {
                    complete: (result) => {
                        console.log(result);
                        setJsonData(result.data);
                    },
                    header: true, // Treat the first row as headers
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data initially when the component mounts
        fetchData();

        // // Set up interval to fetch data every X milliseconds
        // const intervalId = setInterval(fetchData, 10000); // Fetch data every 1 minute (adjust as needed)

        // // Clean up function to clear interval when component unmounts
        // return () => clearInterval(intervalId);
        
    }, []);  // Empty dependency array ensures useEffect runs only once after initial render

    return (
        <div className="CoffeeProducts">
            {jsonData ? (
                <Stack spacing={5}>
                    {jsonData.map((item, index) => (
                        <div key={index}>
                            {/* Render each item */}
                            <LinkCard
                                href={item.link}
                                image={item.photo_url}
                                title={item.title}
                                description={item.description}
                            />
                        </div>
                    ))}
                </Stack>
            ) : (
                <p>Loading...</p>
            ) }
        </div>
    );
}

export default CoffeeProductsFetcher;
