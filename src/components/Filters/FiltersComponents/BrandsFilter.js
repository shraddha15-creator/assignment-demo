const BrandsFilter = ({ state, dispatch }) => {
	return (
		<>
			<div className="filter-category">
				<h4>Brands</h4>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_nike"
							checked={state.brand.nike}
							onChange={() =>
								dispatch({
									type: "BRAND",
									payload: "nike",
								})
							}
						/>
						Nike
					</label>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_puma"
							checked={state.brand.puma}
							onChange={() =>
								dispatch({
									type: "BRAND",
									payload: "puma",
								})
							}
						/>
						Puma
					</label>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_levis"
							checked={state.brand.levis}
							onChange={() =>
								dispatch({
									type: "BRAND",
									payload: "levis",
								})
							}
						/>
						Levi's
					</label>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_avaasa"
							checked={state.brand.avaasa}
							onChange={() =>
								dispatch({
									type: "BRAND",
									payload: "avaasa",
								})
							}
						/>
						Avaasa
					</label>
				</div>
			</div>
		</>
	);
};

export default BrandsFilter;
