import './App.css';
import { Route, Routes } from "react-router-dom";
import CoffeeProductsPage from './components/CoffeeProductsPage';
import KitchenProductsPage from './components/KitchenProductsPage';
import ResponsiveAppBar from './components/ResponsiveAppBar';

function App() {
	return (
		<div className="App">
			<ResponsiveAppBar/>
			<Routes>
				<Route path='/' element={<CoffeeProductsPage/>}/>
				<Route path='/coffee' element={<CoffeeProductsPage/>}/>
				<Route path='/kitchen' element={<KitchenProductsPage/>}/>
			</Routes>
		</div>
  	);
}

export default App;
