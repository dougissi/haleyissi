import * as React from 'react';
import CoffeeHeroImg from '../images/haleyissi-coffee-portrait-440kb.jpg';
import ProductsPage from './ProductsPage';

const GOOGLE_SHEET_PRODUCTS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT23YXn_vr-8ahhQhxNXDJLi9ncssbPb808J57PyBoXh6fUVcnjwl5UKSzcZmiMkfx2eczpgcWMSeFD/pub?output=csv';

export default function CoffeeProductsPage() {
	return (
		<ProductsPage
      productTitle="Coffee"
			heroImg={CoffeeHeroImg}
			heroAltText="haleyissi coffee portrait"
			instagramHandle="issicoffee"
			googleSheetsURL={GOOGLE_SHEET_PRODUCTS_CSV_URL}
		/>
	);
}
