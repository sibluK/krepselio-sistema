import { Product } from "../interfaces";
import '../styles/ProductItem.css'

interface ProductItemProps {
    product: Product;
    AddToCart: (product: Product) => void;
}

export function ProductItem({ product, AddToCart }: ProductItemProps) {
    return (
        <div className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price} €</p>
            <button onClick={() => AddToCart(product)}>Į krepšelį</button>
        </div>
    )
}