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

export default ShowProducts;