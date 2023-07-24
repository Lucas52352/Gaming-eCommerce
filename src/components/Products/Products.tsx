import {useMemo, useState} from "react"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProd } from '../../redux/ProductsActions'
import logoHyperx from './assets/hyperXlogo.png'
import logitechLogo from './assets/logoLogitech.png'
import astroLogo from './assets/logoAstro.png'
import redragonLogo from './assets/logoRedragon.png'
import Card from '../Cards/Card'
import './Products.css'
import { useAuth0 } from '@auth0/auth0-react'
import axios from "axios"
import { setCategoryFilter, setBrandFilter, setColorFilter } from '../../redux/ProductsSlice';



const Products = () => {
  const productos = useSelector((state:any) => state.products)
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState("Allbrands");
  const [selectedColor, setSelectedColor] = useState("AllColors")
  

    const dispatch: any = useDispatch()
    const { user} = useAuth0();
    const [userNext , setUserNext] = useState({
      name:"",
      email:""
    });
    
    useEffect(() => {
      if(user?.name && user?.email){
        setUserNext({
          ...userNext,
          name: user.name,
          email: user.email,
        })
      }
      dispatch(getProd())
      response()
    }, [user])

    const response = ()=>{
      return axios.post("http://localhost:3001/user", userNext)
    }


    const handleCategoryChange = (event:any) => {
      const selectedCategory = event.target.value;
      setSelectedCategory(selectedCategory);
       // Restablecer la marca seleccionada al cambiar de categoría
    };
  
    const handleBrandChange = (event:any) => {
      const selectedBrand = event.target.value;
      console.log(selectedBrand);
      setSelectedBrand(selectedBrand); // Actualizar la marca seleccionada
    };

    const handleColorChange = (event:any) => {
      const selectedColor = event.target.value;
      setSelectedColor(selectedColor)
    }
  
    // Filtrar los productos en función de la categoría y marca seleccionada
    const filteredProducts = productos.products.filter((prod:any) => {
      const isCategoryMatch = selectedCategory === "All" || prod.category === selectedCategory;
      const isBrandMatch = selectedBrand === "Allbrands" || prod.brand === selectedBrand;
      const isColorMatch = selectedColor === "AllColors" || prod.color === selectedColor
      return isCategoryMatch && isBrandMatch && isColorMatch;
    });

  
  return (
    <div className="homeContainer">
      <p style={{fontSize: 28, marginLeft: 50, marginTop: 100}}></p>
      <div className="sectionFilters"> 
        <p style={{fontSize: 28, fontWeight: 'bolder', color: 'white',textAlign: 'center', marginTop: 10}}>Filters</p>

        <div className="filters">
          <p style={{fontSize: 24}}>Categories</p>
            <button className="btnCategories" value='All' onClick={handleCategoryChange}>All categories</button>
            <button className="btnCategories" value='Keyboard' onClick={handleCategoryChange}>Keyboards</button>
            <button className="btnCategories" value='Headphones' onClick={handleCategoryChange}>Headphones</button>
            <button className="btnCategories" value='Mouse' onClick={handleCategoryChange}>Mouse</button>
        </div>
        <hr />
        <div className="filters">
          <p style={{fontSize: 24}}>Brands</p>
          <button className="btnBrands" value='Allbrands' onClick={handleBrandChange}>All brands</button>
          <div className="divBrands" style={{marginTop:20}}>
              <img className="logosBrands" src={logoHyperx} alt="" />
            <button className="btnBrands" value='hyperx' onClick={handleBrandChange}>
              HyperX
            </button>
          </div>
            <hr style={{width: '40%'}} />
          <div className="divBrands" style={{marginTop:20}}>
              <img className="logosBrands" src={logitechLogo} alt="" />
            <button className="btnBrands" value='logitech' onClick={handleBrandChange}>
              Logitech
            </button>
          </div>
            <hr style={{width: '40%'}} />
          <div className="divBrands" style={{marginTop:20}}>
              <img className="logosBrands" src={astroLogo} alt="" />
            <button className="btnBrands" value='astro' onClick={handleBrandChange}>
              Astro
            </button>
          </div>
            <hr style={{width: '40%'}} />
          <div className="divBrands" style={{marginTop:20}}>
              <img className="logosBrands" src={redragonLogo} alt="" />
            <button className="btnBrands" value='redragon' onClick={handleBrandChange}>
              Redragon
            </button>
          </div>
        </div>

        <hr />
        <p style={{fontSize: 24, color: 'white', marginTop: 50, textAlign: 'center'}}>Colors</p>
        <div className="filtersColors">
        <div>
          <div>
            <button value='blue' onClick={handleColorChange} className="colorBlue divColor"></button>
          <p>Blue</p>
          </div>
        </div>
        <div>
          <div>
          <button value='black' onClick={handleColorChange} className="colorBlack divColor"></button>
          <p>Black</p>
          </div>
        </div>
        <div>
          <div>
          <button value='gray' onClick={handleColorChange} className="colorGray divColor"></button>
          <p>Gray</p>
          </div>
        </div>
        <div>
          <div>
          <button value='white' onClick={handleColorChange} className="colorWhite divColor"></button>
          <p>White</p>
          </div>
        </div>
        <div>
          <div>
          <button value='beige' onClick={handleColorChange} className="colorBeige divColor"></button>
          <p>Beige</p>
          </div>
        </div>
        <div>
          <div>
          <button value='rose' onClick={handleColorChange} className="colorPink divColor"></button>
          <p>Pink</p>
          </div>
        </div>
        <div>
          <div>
          <button value='lila' onClick={handleColorChange} className="colorLila divColor"></button>
          <p>Lilac</p>
          </div>
        </div>
        

        </div>
      </div>

    <div className='sectionCards'>
      
       {
        filteredProducts.map((prod:any) => {
          return(
            <Card 
              key={prod.id}
              id={prod.id}
              name={prod.name}
              image={prod.image}
              description={prod.description}
              price={prod.price}
              category={prod.category}
              color={prod.color}
              brand={prod.brand}
              />
              )
            })
          }
    </div>
          </div>
  )
}

export default Products