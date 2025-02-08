import { Product } from "../interfaces";
import '../styles/CartItem.css'

interface CartItemProps {
    product: Product;
    RemoveFromCart(product: Product): void;
}

export function CartItem({ product, RemoveFromCart }: CartItemProps) {
    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <span className="cart-item-name">{product.name}</span>
                <span className="cart-item-price">{product.price} € </span>
            </div>
            <button onClick={() => RemoveFromCart(product)}>Pašalinti</button>
        </div>
    )

}