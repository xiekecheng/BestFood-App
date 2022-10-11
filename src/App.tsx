import Category from "./components/Category"
import HeadlineCards from "./components/HeadlineCards"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import PopularFood from "./components/PopularFood"

function App() {
  return (
    <div className="px-2">
      <Navbar />
      <Hero />
      <HeadlineCards />
      <PopularFood />
      <Category />
    </div>
  )
}

export default App
