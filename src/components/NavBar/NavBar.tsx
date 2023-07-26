import radtek from './assets/Radtek1.png'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import Sections from './Sections';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import MenuIcon from '@mui/icons-material/Menu';



const NavBar = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const {user, isAuthenticated, loginWithRedirect, logout} = useAuth0();
   const [search , setSearch] = useState("")
   const productos = useSelector((state:any) => state.products)
   const cart = useSelector((state:any) => state.cart.cartProducts)
   const cantidad = cart.map((item:any)=>{
        return (+item.cant)
      })
   const totalCantidad = cantidad.reduce((accumulator:any, currentValue:any) => {
        return accumulator + currentValue;
      }, 0);
  const searcher = (event:any)=>{
    setSearch(event.target.value)
  }
  const cleanState = ()=>{
    setSearch("")
  }
  const results = !search ? productos: productos.products.filter((item:any)=> item.name.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>
      <div className='navbar'>
        <div className='menuHamb'>

      <button className='btnSideBarNavbar' onClick={handleShow}>
        <MenuIcon/>
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='sideBarMenuHamb'>
            <Stack className='logSidebar' direction="row" spacing={2}>
            {
              isAuthenticated 
              ?
              <div>

              <img src={user?.picture} alt="" id='logoPerfil'/>
              <button onClick={()=> logout()} className='logoutBtn'>
              <LoginIcon className='logout'/>
              </button>
              </div>
              :
              <div className='containerBtnProfile'>
              <button onClick={() => loginWithRedirect()} className='botonesLogin'>Login</button>
              <button onClick={() => loginWithRedirect()} className='botonesLogin'>Register</button>
              </div>
            }
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
        <div>
          <Link to="/" >
          <img className='logo' src={radtek} alt="" />
          </Link>
        </div>
        <div className="searchContainer">

        <div className='sectionSearchBar'>
          <div>
          <input value={search} onChange={searcher} placeholder='Search...' className='search' type="search" />
            <SearchIcon className='searchIcon'/>
          </div>
          <div>

             {
               search
               ?
              <div className='searchcontain'>
              {
                results.map((item:any)=>{
                  return(
                    <div className='containerInfoP'>
                      <Link to={`/product/${item.id}`} className='linkP' onClick={()=> cleanState()}>
                        <div style={{display:'flex', alignItems:'center'}}>
                          <img style={{width:50, margin:10}} src={item.image} alt="" />
                          <p className='searchP'>{item.name}</p>
                        </div>
                      </Link>
                    </div>
                  )
                })
              }
              </div>
              
              :
              null
            }
            </div>
            </div>
        </div>

        <div className='sectionCart'>
          <Link to="/cart" className='linkIcon'>
          <ShoppingCartIcon className='cart'/>
          <span>{totalCantidad}</span>
          </Link>
          <FavoriteIcon className='fav'/>
          <div className='logMenuBar'>

          <Stack direction="row" spacing={2}>
            {
              isAuthenticated 
              ?
              <div>

              <img src={user?.picture} alt="" id='logoPerfil'/>
              <button onClick={()=> logout()} className='logoutBtn'>
              <LoginIcon className='logout'/>
              </button>
              </div>
              :
              <div className='containerBtnProfile'>
              <button onClick={() => loginWithRedirect()} className='botonesLogin'>Login</button>
              <button onClick={() => loginWithRedirect()} className='botonesLogin'>Register</button>
              </div>
            }
          </Stack>
            </div>
        </div>
      </div>
          <Sections/>
    </div>
  )
}

export default NavBar