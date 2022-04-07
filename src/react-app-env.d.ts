/// <reference types="react-scripts" />

interface Product {
    product_id: number;
    quantity_available: number;
    quantity: number;
    created_by: Author;
    name: string;
    avatar: Avatar;
    initial_price: number;
}

interface ProductCard {
    key: number;
    product: Product;
}