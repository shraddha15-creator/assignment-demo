const SortFilter = ({ state, dispatch }) => {
	return (
		<>
			<div className="filter-sort">
				<h4>Sort by</h4>
				<div>
					<label>
						<input
							type="radio"
							name="sort"
							value="low_to_high"
							checked={state.sortBy === "LOW_TO_HIGH"}
							onChange={() =>
								dispatch({
									type: "SORT",
									payload: "LOW_TO_HIGH",
								})
							}
						/>
						Price - Low to High
					</label>
				</div>
				<div>
					<label>
						<input
							type="radio"
							name="sort"
							value="high_to_low"
							checked={state.sortBy === "HIGH_TO_LOW"}
							onChange={() =>
								dispatch({
									type: "SORT",
									payload: "HIGH_TO_LOW",
								})
							}
						/>
						Price: High to Low
					</label>
				</div>
			</div>
		</>
	);
};

export default SortFilter;
