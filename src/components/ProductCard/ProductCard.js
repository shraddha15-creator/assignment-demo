const ProductCard = ({ product }) => {
	return (
		<div key={product.id} className="product-card">
			<img
				src={product.img}
				alt={`product${product.id}`}
				className="product-img"
			/>
			<p className="brand">{product?.brand?.toUpperCase()}</p>
			<p className="title">{product.title}</p>
			<div className="size-category">
				<p className="size">Size: {product.size}</p>
				<p>{product.category}</p>
			</div>
			<p className="price">₹ {product.price}</p>
		</div>
	);
};

export default ProductCard;
