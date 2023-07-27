import Detail from './components/Detail/Detail'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Carrito from './components/Carrito/Carrito'
import KeyboardCategory from './components/Category/KeyboardCategory'
import Headphones from './components/Category/Headphones'
import MouseCategory from './components/Category/MouseCategory'
import Payment from './components/Payment/Payment'
import Footer from './components/Footer/Footer'
function App() {

  return (
      <div>
        <NavBar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payments" element={<Payment/>}/>
        <Route path="/cart" element={<Carrito/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/keyboards" element={<KeyboardCategory/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/mouses" element={<MouseCategory/>}/>
       </Routes>
       <Footer/>
      </div>
      
   
  )
}

export default App
