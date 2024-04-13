import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Stack } from '@mui/material';
import LinkCard from './LinkCard';

const GOOGLE_SHEET_PRODUCTS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT23YXn_vr-8ahhQhxNXDJLi9ncssbPb808J57PyBoXh6fUVcnjwl5UKSzcZmiMkfx2eczpgcWMSeFD/pub?output=csv';

function formatStrUrl(string) {
    return string.toLowerCase().replace(/ /g, "-");
}

function CoffeeProductsFetcher() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(GOOGLE_SHEET_PRODUCTS_CSV_URL); // Replace 'API_ENDPOINT' with your API URL
                const csvData = await response.text();
                // console.log(csvData)
                
                // Parse CSV to JSON
                Papa.parse(csvData, {
                    complete: (result) => {
                        console.log("csv result:")
                        console.log(result.data);
                        
                        const grouped = Object.groupBy(result.data, ({ category }) => category);
                        // console.log("grouped products:");
                        // console.log(grouped);

                        const groupedArr = Object.entries(grouped);
                        setProducts(groupedArr);
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
            {products ? (
                <>
                    <h2>Categories</h2>
                    <ul style={{textAlign: "left"}}>
                        {products.map(([category, x], ci) => (
                            <li><a href={`#${formatStrUrl(category)}`}>{category}</a></li>
                        ))}
                    </ul>
                    <div className="CategorySection">
                        {products.map(([category, productArr], ci) => (
                            <div key={`category${ci}`}>
                                <h2 id={formatStrUrl(category)}>{category}</h2>
                                <Stack spacing={5} style={{alignItems: 'center'}}>
                                    {productArr.map((product, pi) => (
                                        <div key={`product${pi}`}>
                                            {/* Render each item */}
                                            <LinkCard
                                                href={product.link}
                                                image={product.photo_url}
                                                title={product.title}
                                                description={product.description}
                                            />
                                        </div>
                                    ))}
                                </Stack>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default CoffeeProductsFetcher;
