const SizeFilter = ({ state, dispatch }) => {
	return (
		<>
			<div className="filter-category">
				<h4>Size</h4>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_s"
							checked={state.size.S}
							onChange={() =>
								dispatch({
									type: "SIZE",
									payload: "S",
								})
							}
						/>
						S
					</label>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_m"
							checked={state.size.M}
							onChange={() =>
								dispatch({
									type: "SIZE",
									payload: "M",
								})
							}
						/>
						M
					</label>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_l"
							checked={state.size.L}
							onChange={() =>
								dispatch({
									type: "SIZE",
									payload: "L",
								})
							}
						/>
						L
					</label>
				</div>
				<div>
					<label>
						<input
							type="checkbox"
							name="typeFilter"
							value="type_xl"
							checked={state.size.XL}
							onChange={() =>
								dispatch({
									type: "SIZE",
									payload: "XL",
								})
							}
						/>
						XL
					</label>
				</div>
			</div>
		</>
	);
};

export default SizeFilter;
