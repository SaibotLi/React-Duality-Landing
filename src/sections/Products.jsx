import { useState } from "react";
import ItemList from "../components/ItemList";
import { productData } from "../constants";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row">

      {/* Products side list */}
      <aside className="w-full md:w-1/4 overflow-y-auto">
        <nav className="flex items-center justify-start h-full">
          <ItemList onSelect={handleSelect} />
        </nav>
      </aside>

      {/* Product images */}
      <div className="flex-1 bg-orange-800 flex justify-center items-center">
        {selectedProduct && productData[selectedProduct] ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-40 max-w-screen-lg mx-auto p-4">
            {productData[selectedProduct].map((imgUrl, index) => (
              <div key={index} className="m-4 flex justify-center">
                <img src={imgUrl} alt={selectedProduct} className="w-48 h-48 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-center font-semibold">Elige un producto para ver imágenes.</p>
        )}
      </div>

    </section>
  );
};

export default Products;