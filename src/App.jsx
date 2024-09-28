
//import './index.css'
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Main  from "./components/main/main";
import "./App.css"
import Testimonial from "./components/testimonial/testimonial";
import Footer from "./components/footer/footer";





const App = () => {
  return (
    <div className="parent">
      <div className="sub-parent">
    <Navbar />
    <Hero />
    <Main />   
  </div>
  <Testimonial />
  <Footer />



    </div>
  )
}

export default App
