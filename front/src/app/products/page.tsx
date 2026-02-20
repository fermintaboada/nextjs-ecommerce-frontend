import ProductCard from "@/components/ProductCard";
import { Product } from "@/interfaces/IProduct";
import { getAllProductsService } from "@/services/productServices";

const ProductsPage = async () => {
const allProducts = await getAllProductsService();

return (
    <main className="container mx-auto px-4 md:px-8 py-10">
        <h1 className="text-3xl font-bold mb-8" style={{ color: "var(--primary-color)" }}>Nuestro Catálogo</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {allProducts && allProducts.map((product: Product) => {
            return <ProductCard product={product} key={product.id} />;
        })}
        </section>
    </main>
);
};

export default ProductsPage;