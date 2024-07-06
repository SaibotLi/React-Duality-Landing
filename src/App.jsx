import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ShowProducts from './sections/ShowProducts';
import Products from './sections/Products';

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
            </>
          } />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;