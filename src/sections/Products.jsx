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

      {/* Products side list */}
      <aside className="h-screen w-1/4">
        <nav className="flex items-center justify-start h-full">
          <ItemList onSelect={handleSelect} />
        </nav>
      </aside>

       {/* Product set = Show product img*/}
      <div className="flex-1 flex flex-wrap justify-center items-center bg-orange-800">
        {selectedProduct && productData[selectedProduct] ? (
          productData[selectedProduct].map((imgUrl, index) => (
            <div key={index} className="m-2">
              <img src={imgUrl} alt={selectedProduct} className="w-32 h-32 object-cover" />
            </div>
          ))
        ) : (
          <p className="text-white font-semibold">Elige un producto para ver imágenes.</p> // Message when no product is selected
        )}
      </div>
    </section>
  );
};

export default Products;