import Detail from './components/Detail/Detail'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
function App() {

  return (
      <div>
       <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/product/:id" element={<Detail/>}/>
        <Route path="/home" element={<Home/>}/>
       </Routes>
      </div>
      
   
  )
}

export default App
