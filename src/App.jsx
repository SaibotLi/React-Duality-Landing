import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"

const App = () => {
  return (
  <main className="relative">
    <Navbar /> 
    <section className="xl:padding-l wide:padding-r padding-b">
    <Hero />
    </section>
  </main>
  )
}

export default App
