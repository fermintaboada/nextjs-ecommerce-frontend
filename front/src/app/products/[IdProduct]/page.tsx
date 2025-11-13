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
    const { IdProduct } =  await params;

    let productData: Product;

    try {
        productData = await getProductByIdService(IdProduct);
    } catch (error) {
        console.log(error)
        notFound();
    }

    return ( 
        <div>
            <h1> Este es mi producto {IdProduct} </h1>
            {JSON.stringify(productData)}  
            <ButtonAddCart product= {productData} />
        </div>    
    );
};

export default ProductDetailPage;