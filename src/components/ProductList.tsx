import { ProductItem } from "./ProductItem"
import { Product } from "../interfaces";
import '../styles/ProductList.css'

interface ProductListProps {
    AddToCart: (product: Product) => void;
}

export function ProductList({ AddToCart }: ProductListProps) {

    const products: Product[] = [
        { id: 1, name: 'Produktas 1', price: 100 },
        { id: 2, name: 'Produktas 2', price: 200 },
        { id: 3, name: 'Produktas 3', price: 300 },
        { id: 4, name: 'Produktas 4', price: 400 },
        { id: 5, name: 'Produktas 5', price: 500 },
        { id: 6, name: 'Produktas 6', price: 600 },
        { id: 7, name: 'Produktas 7', price: 700 },
        { id: 8, name: 'Produktas 8', price: 800 },
        { id: 9, name: 'Produktas 9', price: 900 },
        { id: 10, name: 'Produktas 10', price: 1000 },
    ]

    return (
        <>
            <div className="product-list-wrapper">
                <h3>Prekės</h3>
                <div className="product-list">
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} AddToCart={AddToCart}/>
                    ))}
                </div>
            </div>
        </>
    )
}