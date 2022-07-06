const CategoryFilter = ({ state, dispatch }) => {
	return (
		<>
			<div className="filter-category">
				<h4>Category</h4>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_men"
							checked={state.category.men}
							onChange={() =>
								dispatch({
									type: "CATEGORY",
									payload: "men",
								})
							}
						/>
						Men
					</label>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_women"
							checked={state.category.women}
							onChange={() =>
								dispatch({
									type: "CATEGORY",
									payload: "women",
								})
							}
						/>
						Women
					</label>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_kids"
							checked={state.category.kids}
							onChange={() =>
								dispatch({
									type: "CATEGORY",
									payload: "kids",
								})
							}
						/>
						Kids
					</label>
				</div>
			</div>
		</>
	);
};

export default CategoryFilter;
