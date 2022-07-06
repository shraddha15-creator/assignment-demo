export const categoryFunction = (brandFiltered, category) => {
	let total = [];
	if (category.men) {
		const men = [...brandFiltered].filter((item) => item.category === "men");
		total = [...total, ...men];
	}
	if (category.women) {
		const women = [...brandFiltered].filter(
			(item) => item.category === "women"
		);
		total = [...total, ...women];
	}
	if (category.kids) {
		const kids = [...brandFiltered].filter((item) => item.category === "kids");
		total = [...total, ...kids];
	}

	if (total.length !== 0) return total;

	return brandFiltered;
};
