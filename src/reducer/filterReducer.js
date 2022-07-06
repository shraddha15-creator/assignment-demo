export const filterReducer = (state, action) => {
	switch (action.type) {
		case "CLEAR":
			return {
				...state,
				sortBy: null,
				category: { men: false, women: false, kids: false },
				size: { S: false, M: false, L: false, XL: false },
				brand: {
					nike: false,
					puma: false,
					levis: false,
					avaasa: false,
				},
			};
		case "SORT":
			return { ...state, sortBy: action.payload };

		case "CATEGORY":
			return {
				...state,
				category: {
					...state.category,
					[action.payload]: !state.category[action.payload],
				},
			};

		case "SIZE":
			return {
				...state,
				size: {
					...state.size,
					[action.payload]: !state.size[action.payload],
				},
			};
		case "BRAND":
			return {
				...state,
				brand: {
					...state.brand,
					[action.payload]: !state.brand[action.payload],
				},
			};
	}
};
