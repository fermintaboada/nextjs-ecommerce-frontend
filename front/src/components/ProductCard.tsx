import { Product } from "@/interfaces/IProduct";
import Image from "next/image";
import React from "react";
import ButtonAddCart from "./buttonAddCart";
import Link from "next/link";

interface CardProps {
  product: Product;
}

const ProductCard = ({ product }: CardProps) => {
  return (
    <div className="w-[350px] h-[580px] flex flex-col bg-[color-mix(in_oklab,black_60%,transparent)] backdrop-blur-md border border-[var(--c-border)] rounded-2xl p-4 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/50 group">
      
      <Link href={`/products/${product.id}`} className="cursor-pointer">
        <div className="w-full h-72 relative overflow-hidden rounded-xl border border-[var(--c-border)] bg-black/20"> 
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            className="p-4"
          />
        </div>

        <div className="mt-5 space-y-3">
          <h3 className="text-[var(--c-primary)] text-2xl font-bold truncate tracking-tight">
            {product.name}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 h-[60px]">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-white text-3xl font-extrabold">
              ${product.price}
            </span>

            <span className="text-green-500 text-xs font-bold uppercase tracking-widest">
              Stock disponible
            </span>
          </div>
        </div>
      </Link>

      <div className="mt-auto">
        <ButtonAddCart product={product} />
      </div>
    </div>
  );
}

export default ProductCard;