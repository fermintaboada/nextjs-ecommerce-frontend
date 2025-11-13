"use client"; 

import { useCart } from '@/contexts/CardContex';
import { Product } from '@/interfaces/IProduct';
import React from 'react'

interface ButtonProps {
    product: Product;
}

const ButtonAddCart = ({ product }: ButtonProps) =>{
 const { addToCart} = useCart();

return (
    <div className='mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 '>
        <button onClick={()=>addToCart(product)}
        className="cursor-pointer text-white mt-4 sm:mt-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        > 
        <svg
            className='w-5 h-5 -ms-2 me-2'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width="24"
            height="24"
            fill='none'
            viewBox='0 0 24 24'
        >
            <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width="2"
            d= "m4 4h1.5l8 16m0 0h8m 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
        />
        </svg>
        Agregar al carrito
        </button>
    </div>
);
};

export default ButtonAddCart