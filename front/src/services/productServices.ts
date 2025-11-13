/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "../interfaces/IProduct";

export const getAllProductsService = async () => {
  try {
    const res = await fetch("http://localhost:3001/products",{
      method: "GET",
    });
    const products: Product[] = await res.json();
    return products;
  } catch (error: any) {
    throw Error(error); 
  }
};

export const getProductByIdService = async (id: string ) => {
  try {
    const allProducts = await getAllProductsService();
    const product = allProducts.find((product) => product.id === Number(id)); 
    if (!product) { 
      throw new Error("No se encontro ningun producto con ese ID!"); 
    };
    return product;
  } catch (error: any) {
    throw new Error(error); 
  }
};