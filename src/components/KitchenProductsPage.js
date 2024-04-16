import * as React from 'react';
import KitchenHeroImg from '../images/haleyissi-kitchen-hero-530kb.jpg';
import ProductsPage from './ProductsPage';

const GOOGLE_SHEET_PRODUCTS_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT23YXn_vr-8ahhQhxNXDJLi9ncssbPb808J57PyBoXh6fUVcnjwl5UKSzcZmiMkfx2eczpgcWMSeFD/pub?gid=1750130898&single=true&output=csv';

export default function KitchenProductsPage() {
	return (
		<ProductsPage
      productTitle="Kitchen"
			heroImg={KitchenHeroImg}
			heroAltText="haleyissi kitchen portrait"
			instagramHandle="issikitchen"
			googleSheetsURL={GOOGLE_SHEET_PRODUCTS_CSV_URL}
		/>
	);
}
