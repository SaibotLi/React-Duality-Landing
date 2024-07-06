import { products } from "../constants";
import ProductsCard from "../components/ProductsCard";

const ShowProducts = () => {
  return (
    <section id="showProducts" className="max-container max-sm:mt-12">
      <div className="flex flex-col gap-5 py-4">
        <h2 className="text-4xl text-center font-bold">Lo <span className="text-orange-500">más</span> buscado</h2>
      </div>  
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mx-auto justify-items-center">
        {products.map((product) => (
          <ProductsCard key={product.name} {...product} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center gap-5 py-8">
        <a href="/products">
          <button className="h-10 w-60 border-black border-4 text-black font-medium bg-orange-600 rounded-full"> VER MÁS PRODUCTOS </button>
        </a>
      </div>
    </section>
  );
}

export default ShowProducts;