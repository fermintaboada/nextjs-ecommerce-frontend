import { Product } from "@/interfaces/IProduct";
import { notFound } from "next/navigation";
import { getProductByIdService } from "@/services/productServices";
import ButtonAddCart from "../../../components/buttonAddCart";

interface ProductDetailProps {
    params: {
        IdProduct: string;
    };
}

const ProductDetailPage = async ({ params }: ProductDetailProps) => {
    const { IdProduct } = await params;

    let productData: Product;

    try {
        productData = await getProductByIdService(IdProduct);
    } catch (error) {
        console.log(error)
        notFound();
    }

    return ( 
        <main className="min-h-[calc(100-nav)] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-[var(--c-surface)] backdrop-blur-md rounded-2xl overflow-hidden border border-[var(--c-border)] shadow-2xl">
                <div className="flex flex-col md:flex-row">

                    <div className="md:w-1/2 bg-white/5 flex items-center justify-center p-8 border-b md:border-b-0 md:border-r border-[var(--c-border)]">
                        <div className="relative w-full h-[300px] md:h-[500px]">
                            <img 
                                src={productData.image} 
                                alt={productData.name}
                                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <nav className="font-roboto-condensed text-[var(--c-primary)] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                            Tecnología • Hardware
                        </nav>
                        
                        <h1 className="font-roboto-condensed text-4xl md:text-5xl font-bold text-[var(--c-text)] mb-6 leading-tight">
                            {productData.name}
                        </h1>

                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-4xl font-light text-[var(--c-text)]">
                                ${productData.price}
                            </span>
                            <span className="text-[var(--c-text-muted)] line-through text-lg">
                                ${Math.round(productData.price * 1.2)}
                            </span>
                        </div>

                        <div className="space-y-6 mb-10">
                            <div>
                                <h3 className="font-roboto-condensed text-[var(--c-text-muted)] text-xs font-bold uppercase mb-3 tracking-widest">
                                    Descripción del equipo
                                </h3>
                                <p className="font-sans text-[var(--c-text)] leading-relaxed text-base opacity-90">
                                    {productData.description}
                                </p>
                            </div>

                            <div className="flex gap-3 mt-4">
                                <span className="px-3 py-1 bg-[var(--c-primary)]/10 text-[var(--c-primary)] text-xs font-bold rounded-full border border-[var(--c-primary)]/20">
                                    Stock Disponible
                                </span>
                            </div>
                        </div>
                        <div className="w-full pt-6 border-t border-[var(--c-border)]">
                            <ButtonAddCart product={productData} />
                            <p className="text-[var(--c-text-muted)] text-[10px] text-center mt-4 uppercase tracking-tighter">
                                Garantía oficial • Pago encriptado SSL
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default ProductDetailPage;