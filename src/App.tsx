import Detail from './components/Detail/Detail'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Carrito from './components/Carrito/Carrito'
function App() {

  return (
      <div>
        <NavBar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Carrito/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
       </Routes>
      </div>
      
   
  )
}

export default App
