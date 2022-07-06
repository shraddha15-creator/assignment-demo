import { useReducer } from "react";
import "./App.css";
import { products } from "./product_DB.js";
import {
	sortFunction,
	filterFunction,
	categoryFunction,
	brandFunction,
} from "./utilities";
import { filterReducer } from "./reducer/filterReducer";
import Filters from "./components/Filters/Filters";
import ProductCard from "./components/ProductCard/ProductCard";

const filterState = {
	sortBy: null,
	size: { S: false, M: false, L: false, XL: false },
	category: { men: false, women: false, kids: false },
	brand: {
		nike: false,
		puma: false,
		levis: false,
		avaasa: false,
	},
};

function App() {
	const [state, dispatch] = useReducer(filterReducer, filterState);

	const sortedProducts = sortFunction(products, state.sortBy);
	const filterdProducts = filterFunction(sortedProducts, state.size);
	const brandFiltered = brandFunction(filterdProducts, state.brand);
	const categoryFiltered = categoryFunction(brandFiltered, state.category);
	console.log(categoryFiltered);

	return (
		<div className="App">
			<Filters state={state} dispatch={dispatch} />
			<div className="products-container">
				{categoryFiltered?.map((product) => {
					return <ProductCard product={product} />;
				})}
			</div>
		</div>
	);
}

export default App;
