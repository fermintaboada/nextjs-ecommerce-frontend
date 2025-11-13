import ProductCard from "@/components/ProductCard";
import { Product } from "@/interfaces/IProduct";
import { getAllProductsService } from "@/services/productServices"


const Home = async () => {
  const allProducts = await getAllProductsService();

  return(
    <div>
      <section className="w-screen flex flex-wrap gap-5">
        {allProducts && allProducts.map((product: Product) => {
          return <ProductCard  product={product} key={product.name}/>;

        })}
      </section>
    </div>

  );
};

export default Home; 