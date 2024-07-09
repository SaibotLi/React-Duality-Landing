import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ShowProducts from './sections/ShowProducts';
import Products from './sections/Products';
import Contacto from './sections/Contacto';
import Footer from './sections/Footer';
import AboutUs from './sections/AboutUs';

const App = () => {
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
                <Footer />
            </>
          } />
          <Route path="/products" element={<Products />} />
          <Route path="/sobreNosotros" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;