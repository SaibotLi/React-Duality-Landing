import { products } from "../constants";
import ProductsCard from "../components/ProductsCard";

const ShowProducts = () => {
  return (
<section id="showProducts" className="max-container max-sm:mt-12">
<div className="flex flex-col gap-5 py-4">
  <h2 className="text-4xl text-center font-bold">Lo <span className="text-orange-500">más</span> buscado</h2>
  </div>  
  <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
    {products.map((product) => (
      <ProductsCard key={product.name} {...product} />
    ))}
  </div>
<div className="flex flex-col justify-center items-center gap-5 py-8">
<button className="h-10 w-60 border-4 border-black text-black font-medium bg-orange-600 rounded-full"> VER MÁS PRODUCTOS </button>
</div>
</section>
  );
}

export default ShowProducts;



{/*
   import { products } from "../constants";
import ProductsCard from "../components/ProductsCard";

const ShowProducts = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-12 md:px-24 lg:px-60">
      {["Tazas", "Remeras", "Gorras", "Banderas", "Banner", "Plotter", "Botineros", "Mochilas", "Varios"].map((item, index) => (
        <div key={index} className="relative bg-cover bg-center h-80 min-w-[200px] max-w-[400px]" style={{ backgroundImage: `url(/path/to/your/image${index + 1}.jpg)` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{item}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowProducts; */}