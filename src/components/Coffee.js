import * as React from 'react';
import { Link } from '@mui/material';
import CoffeeLogoImg from '../images/haleyissi-coffee-portrait-440kb.jpg';
import CoffeeProductsFetcher from './CoffeeProductsFetcher';

export default function Coffee() {
    return (
        <header className="App-header">
        <img src={CoffeeLogoImg} height="500" alt="haleyissi coffee portrait" />
        <h1>
          <Link href="https://instagram.com/issicoffee" target="_blank" useRef="noopener noreferrer">@issicoffee</Link> Gear
        </h1>
        <CoffeeProductsFetcher/>
        <p style={{maxWidth: "90%"}}>I earn a commission for items purchased through this site.</p>        
      </header>
    );
  }