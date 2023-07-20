
import Carousel from './components/Carousel/Carousel'
import Detail from './components/Detail/Detail'
import NavBar from './components/NavBar/NavBar'
import Products from './components/Products/Products'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
function App() {

  return (
      <div>
       <NavBar/>
       <Routes>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/login" element={<Detail/>}/>
        <Route path="/home" element={<Home/>}/>
       </Routes>
      </div>
      
   
  )
}

export default App
