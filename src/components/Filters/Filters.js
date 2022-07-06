import BrandsFilter from "./FiltersComponents/BrandsFilter";
import CategoryFilter from "./FiltersComponents/CategoryFilter";
import SizeFilter from "./FiltersComponents/SizeFilter";
import SortFilter from "./FiltersComponents/SortFilter";
import "../../App.css";

const Filters = ({ state, dispatch }) => {
	return (
		<>
			<div className="filter-container">
				<div className="filter-title">
					<h4>Filters</h4>
					<button
						className="clear-filter-btn"
						onClick={() => dispatch({ type: "CLEAR" })}
					>
						Clear
					</button>
				</div>
				<SortFilter state={state} dispatch={dispatch} />
				<SizeFilter state={state} dispatch={dispatch} />
				<BrandsFilter state={state} dispatch={dispatch} />

				<CategoryFilter state={state} dispatch={dispatch} />
			</div>
		</>
	);
};

export default Filters;
