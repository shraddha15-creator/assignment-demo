export const filterFunction = (sortedProducts, size) => {
	let total = [];
	if (size.S) {
		const S = [...sortedProducts].filter((item) => item.size === "S");
		total = [...total, ...S];
	}
	if (size.M) {
		const M = [...sortedProducts].filter((item) => item.size === "M");
		total = [...total, ...M];
	}
	if (size.L) {
		const L = [...sortedProducts].filter((item) => item.size === "L");
		total = [...total, ...L];
	}
	if (size.XL) {
		const XL = [...sortedProducts].filter((item) => item.size === "XL");
		total = [...total, ...XL];
		return total;
	}
	if (total.length !== 0) return total;

	return sortedProducts;
};
