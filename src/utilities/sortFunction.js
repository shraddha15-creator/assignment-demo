export const sortFunction = (products, sortBy) => {
	if (sortBy === "LOW_TO_HIGH")
		return [...products].sort(
			(firstProduct, secondProduct) => firstProduct.price - secondProduct.price
		);

	if (sortBy === "HIGH_TO_LOW")
		return [...products].sort(
			(firstProduct, secondProduct) => secondProduct.price - firstProduct.price
		);

	return products;
};
