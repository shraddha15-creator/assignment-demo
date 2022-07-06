export const brandFunction = (filterdProducts, brand) => {
	let total = [];
	if (brand.nike) {
		const nike = [...filterdProducts].filter((item) => item.brand === "nike");
		total = [...total, ...nike];
	}
	if (brand.puma) {
		const puma = [...filterdProducts].filter((item) => item.brand === "puma");
		total = [...total, ...puma];
	}
	if (brand.levis) {
		const levis = [...filterdProducts].filter((item) => item.brand === "levis");
		total = [...total, ...levis];
	}
	if (brand.avaasa) {
		const avaasa = [...filterdProducts].filter(
			(item) => item.brand === "avaasa"
		);
		total = [...total, ...avaasa];
		return total;
	}
	if (total.length !== 0) return total;

	return filterdProducts;
};
