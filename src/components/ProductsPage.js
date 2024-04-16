import * as React from 'react';
import { Link } from '@mui/material';
import ProductsFetcher from './ProductsFetcher';

export default function ProductsPage({productTitle, heroImg, heroAltText, instagramHandle, googleSheetsURL}) {
    return (
        <header className="App-header">
        <img src={heroImg} height="500" alt={heroAltText} />
        <h1>
        	{productTitle} Gear by <Link href={`https://instagram.com/${instagramHandle}`} target="_blank" useref="noopener noreferrer">@{instagramHandle}</Link>
        </h1>
		    <ProductsFetcher googleSheetsURL={googleSheetsURL} />
        <p style={{maxWidth: "90%"}}>I earn a commission for items purchased through this site.</p>        
      </header>
    );
  }