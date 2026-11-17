import AITypes from "./components/AiTypes"
import Benefits from "./components/Benefits"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <AITypes/>
      <Benefits/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default App