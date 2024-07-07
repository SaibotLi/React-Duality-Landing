import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ShowProducts from './sections/ShowProducts';
import Products from './sections/Products';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';
import { useState } from 'react';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Router>
      <main className="relative">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
              </section>
              <section>
                <ShowProducts />
              </section>
              <Contacto />
              <Footer selectedProduct={selectedProduct} />
            </>
          } />
          <Route path="/products" element={<Products onProductSelect={setSelectedProduct} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;