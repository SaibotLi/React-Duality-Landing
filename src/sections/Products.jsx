import { useState } from "react";
import ItemList from "../components/ItemList";
import { productData } from "../constants";

const Products = ({ onProductSelect }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelect = (product) => {
    setSelectedProduct(product);
    onProductSelect(product);
  };

  return (
    <>
      <section className="min-h-screen w-full flex flex-col md:flex-row">
        {/* Products side list */}
        <aside className="w-full md:w-1/4 overflow-y-auto">
          <nav className="flex items-center justify-start h-full">
            <ItemList onSelect={handleSelect} />
          </nav>
        </aside>

        {/* Product images */}
        <div className="flex-1 bg-orange-800 flex justify-center items-start mb-10">
          {selectedProduct && productData[selectedProduct] ? (
            <div id={selectedProduct.toLowerCase()} className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-40 max-w-screen-lg mx-auto p-4 h-5/6 place-content-start">
              {productData[selectedProduct].map((imgUrl, index) => (
                <div key={index} className="m-4 flex justify-center">
                  <img src={imgUrl} alt={selectedProduct} className="object-cover rounded-lg" />
                </div>
              ))}
            </div>
          ) : (
            <p className="flex items-center h-screen text-white font-semibold">Elige un producto para ver imágenes.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;