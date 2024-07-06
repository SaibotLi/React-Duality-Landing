import { useState } from "react";
import ItemList from "../components/ItemList";
import { productData } from "../constants";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
  <section className="h-screen w-full flex">

    {/* MAKE THIS RESPONSIVE */}

      {/* Products side list */}
      <aside className="h-screen w-1/4">
        <nav className="flex items-center justify-start h-full">
          <ItemList onSelect={handleSelect} />
        </nav>
      </aside>

      {/* Product set = Show product img */}
      <div className="w-full bg-orange-800 flex justify-center items-center">
        {selectedProduct && productData[selectedProduct] ? (
          <div className="grid grid-cols-3 gap-3 w-full content-center">
            {productData[selectedProduct].map((imgUrl, index) => (
              <picture key={index} className="m-2 flex justify-center flex-wrap py-5 px-2">
                <img src={imgUrl} alt={selectedProduct} className="w-32 h-32 object-cover" />
              </picture>
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