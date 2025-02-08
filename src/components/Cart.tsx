import { CartItem } from "./CartItem";
import { Product } from "../interfaces";
import { useEffect, useState } from "react";
import '../styles/Cart.css'

interface CartProps {
    selectedProducts: Product[];
    RemoveFromCart: (product: Product) => void;
}

export function Cart({ selectedProducts, RemoveFromCart }: CartProps) {

    const [totalPrice, setTotalPrice] = useState<number>(0)

    useEffect(() => {
        const total = selectedProducts.reduce((sum, p) => sum + p.price, 0);
        setTotalPrice(total);
    }, [selectedProducts]);

    return (
        <div className="cart-wrapper">
            <h3>Krepšelis</h3>
            <div className="cart-items">
                {selectedProducts.length === 0 && (
                    <p className="empty-cart-message">Krepšelis tuščias</p>
                )}
                {selectedProducts.map(product => (
                    <CartItem key={product.id} product={product} RemoveFromCart={RemoveFromCart}/>
                ))}
            </div>

            <div className="total-cart-price-wrapper">
                {selectedProducts.length > 0 && (
                    <span>Bendra kaina: <span className="total-cart-price">{totalPrice} €</span></span>
                )}
            </div>
        </div>
    )
}