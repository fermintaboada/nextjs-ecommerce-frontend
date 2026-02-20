"use client";
import { Product } from "@/interfaces/IProduct";
import { createContext, useContext, useEffect, useState } from "react";
import { UseAuth } from "./AuthContext";

interface CartContextProps {
    cartItems: Product[];
    addToCart: (Product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
    getTotal: () => number;
    getIdItems: () => number[];
    getItemsCount: () => number;
}

const CartContext = createContext<CartContextProps>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    getTotal: () => 0,
    getIdItems: () => [],
    getItemsCount: () => 0,
});

interface CartProvider {
    children: React.ReactElement;
}

export const CartProvider: React.FC<CartProvider> = ({ children }) => {
    const { dataUser, loading } = UseAuth(); 
    const [cartItems, setCartItems] = useState<Product[]>([]);

useEffect(() => {
    if (cartItems.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
        const cartInfo = localStorage.getItem("cart");
        if (cartInfo) {
        setCartItems(JSON.parse(cartInfo));
        }
    }
}, []);

const addToCart = (Product: Product) => {
    if (!dataUser) {
        alert("Debes estar logueado para agregar un producto al carrito");
        return;
    }

    const existingProduct = cartItems.some((item) => item.id === Product.id);
    if (existingProduct) {
        alert("Solo puedes agregar una unidad por producto");
        return;
    }

    setCartItems((prevItems) => [...prevItems, Product]);
};

const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId),
    );
};

const clearCart = () => {
    setCartItems([]);
    if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem("cart");
    }
};

useEffect(() => {
    if (!loading && !dataUser) {
        clearCart();
    }
}, [dataUser, loading]);

const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
};

const getIdItems = () => {
    return cartItems.map((item) => item.id);
};

const getItemsCount = () => {
    return cartItems.length;
};

return (
    <CartContext.Provider
    value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        getIdItems,
        getItemsCount,
    }}
    >
    {children}
    </CartContext.Provider>
);
};

export const useCart = () => useContext(CartContext);
