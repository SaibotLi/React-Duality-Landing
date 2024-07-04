import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import ShowProducts from "./sections/ShowProducts"

const App = () => {
  return (
  <main className="relative">
    <Navbar /> 
    <section className="xl:padding-l wide:padding-r padding-b">
    <Hero />
    </section>
    <section>
      <ShowProducts />
    </section>
  </main>
  )
}

export default App
