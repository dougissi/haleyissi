import * as React from 'react';
import { Stack, Link } from '@mui/material';
import LinkCard from './LinkCard';
import CoffeeLogoImg from '../images/haleyissi-coffee-portrait.JPG';
import FellowCanisterWhiteImg from '../images/fellow-canister-white0.7.png'
import FellowCanisterBlackImg from '../images/fellow-canister-black1.2.png'
import CoffeeProductsFetcher from './CoffeeProductsFetcher';

export default function Coffee() {
    return (
        <header className="App-header">
        <img src={CoffeeLogoImg} height="500" alt="haleyissi coffee portrait" />
        <h1>
          <Link href="https://instagram.com/issicoffee" target="_blank" useRef="noopener noreferrer">@issicoffee</Link> Gear
        </h1>
        <CoffeeProductsFetcher/>
        {/* <Stack spacing={5}>
            <LinkCard
              href='https://l.instagram.com/?u=https%3A%2F%2Famzn.to%2F48I9Qge&e=AT1VemF1c72P9DcXj0lPAoVRp9_Y_gAoCVqwoFgczr82jm1mA0RhtN8LU4ytSu0E_owC_nOE46wAU8JBL-NloNihXHtKMBjO'
              image='https://m.media-amazon.com/images/I/51BLvOcUjUL._AC_SL1428_.jpg'
              title='Fellow Eddy Pitcher'
            />
            <LinkCard 
              href='https://l.instagram.com/?u=https%3A%2F%2Famzn.to%2F3v4TqAK&e=AT2lCFSkq8S8cILuklGVmXGNPtaxuefbeQV4O-VCan4GYUddcCSkZzm_xaPYwgP9JEu3O18Rw4OiQ_m8KQM70alfJS85X2Uo' 
              image="https://m.media-amazon.com/images/I/219pnmNCpSL._AC_.jpg"
              title="Acme USA Capuccino Cup"
            />
            <LinkCard 
              href='https://l.instagram.com/?u=https%3A%2F%2Famzn.to%2F3InpBOU&e=AT0wfNmY9Owy0iK0qsA13Wj5wPLx6YZEEeQOQ3Fox3G_wbOSEUz7YzGgUkvV1BCdemtx5_uDJ0pGVyqkXHGIj5MDkQYhYYKv'
              image={FellowCanisterWhiteImg}
              title='Fellow Atmos Canister (0.7L/White)'
            />
            <LinkCard
              href='https://l.instagram.com/?u=https%3A%2F%2Famzn.to%2F49zuDUJ&e=AT2rDbokxqvIPi7AFiReyq9rjmHXVu9Q4Subeu2cJlUw_QofFWbGukIHzqH7ijJD6aayCcazRFDghpqMnTN63rBwQpqjsQHo'
              image={FellowCanisterBlackImg}
              title='Fellow Atmos Canister (1.2L/Black)'
            />
            <LinkCard
              href='https://l.instagram.com/?u=https%3A%2F%2Famzn.to%2F48DdtUD&e=AT1DstcMJLGIXnKVPhIk4Cw-BOmEbuLPH8fWxo-YsSn8QtPjT7YSNetqv-SnSAMCBamdxrlChqOsu9Dt6Gt1FrzinFX_txvB'
              image='https://m.media-amazon.com/images/I/51VeHuW95LL._AC_SL1500_.jpg'
              title='Fellow Stagg EKG Kettle'
            />
        </Stack> */}
        <p style={{maxWidth: "90%"}}>I earn a commission for items purchased through this site.</p>        
      </header>
    );
  }