import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { Box, Stack, Typography } from '@mui/material';
import LinkCard from './LinkCard';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function formatStrUrl(string) {
    return string.toLowerCase().replace(/ /g, "-");
}

function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function ProductsFetcher({googleSheetsURL}) {
    const [productData, setProductData] = useState(null);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(googleSheetsURL);
                const csvData = await response.text();
                // console.log(csvData)
                
                // Parse CSV to JSON
                Papa.parse(csvData, {
                    complete: (result) => {
                        // console.log("csv result:")
                        // console.log(result.data);

                        // used for search bar
                        const dataWithId = result.data.map((product, i) => ({id: i, ...product}));
                        setProductData(dataWithId);

                        // products grouped by category
                        const grouped = Object.groupBy(dataWithId, ({ category }) => category);
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
        
    }, [googleSheetsURL]);
    
    const handleSearchBarChange = (event, option) => {
        if (option) {
            console.log(option.title + " id: " + option.id);
            scrollToElement(`product${option.id}`)
        }
    }

    return (
        <div className="Products">
            {products ? (
                <>
                    {/* Search Box */}
                    <Autocomplete
                        id="grouped-demo"
                        options={productData}
                        groupBy={(option) => option.category}
                        getOptionLabel={(option) => option.title}
                        sx={{ width: "100%" }}
                        renderInput={(params) => <TextField {...params} label={<Box display="flex" alignItems="center"><SearchIcon/><Typography>Search Gear</Typography></Box>} />}
                        onChange={handleSearchBarChange}
                    />

                    {/* Quick Links for Categories */}
                    <h2>Categories</h2>
                    <ul style={{textAlign: "left"}}>
                        {products.map(([category, x], ci) => (
                            <li key={`categoryLink${ci}`}><a href={`#${formatStrUrl(category)}`}>{category}</a></li>
                        ))}
                    </ul>

                    {/* Product Cards by Category */}
                    <div className="CategorySection">
                        {products.map(([category, productArr], ci) => (
                            <div key={`category${ci}`}>
                                <h2 id={formatStrUrl(category)}>{category}</h2>
                                <Stack spacing={5} style={{alignItems: 'center'}}>
                                    {productArr.map((product, pi) => (
                                        <div key={`product${product.id}`} id={`product${product.id}`}>
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

export default ProductsFetcher;
