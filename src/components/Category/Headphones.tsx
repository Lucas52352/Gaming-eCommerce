import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Cards/Card'
import { getProd } from '../../redux/ProductsActions'
import SidebarCategories from "./SidebarCategories/SidebarCategories"
import Searchbar from '../Searchbar/Searchbar'


function Headphones() {
    const productos = useSelector((state:any) => state.products)
    const dispatch: any = useDispatch()
    const filtered = productos.products.filter((item:any)=> item.category === "Headphones")
    
    const [selectedFilters, setSelectedFilters] = useState({
        brand: 'Allbrands',
        color: 'AllColors',
      });
    
      const handleFilterChange = (filters:any) => {
        setSelectedFilters(filters);
      };


    useEffect(() => {
    dispatch(getProd())
  }, [])


  const filteredProducts = filtered.filter((prod:any) => {
    const isBrandMatch = selectedFilters.brand === 'Allbrands' || prod.brand === selectedFilters.brand;
    const isColorMatch = selectedFilters.color === 'AllColors' || prod.color === selectedFilters.color;
    return isBrandMatch && isColorMatch;
  });






  return (
    <div>
        <div style={{display:'flex', justifyContent: 'space-evenly', marginTop: 70, marginBottom: 50}}>
            <h2>Headphones</h2>
            <SidebarCategories onFilterChange={handleFilterChange} />
        </div>
        <div style={{marginBottom:50}}>
            <Searchbar/>

        </div>

        <div className='mouseContain'>
    {
        filteredProducts.map((prod:any)=>{
            return(
                <>
                    <Cards
                        id={prod.id}
                        name={prod.name}
                        image={prod.image}
                        price={prod.price} 
                        color={''} 
                        description={''} 
                        brand={''} 
                        category={''}                        
                        />
                </>
            )
        })
    }
        </div>
    </div>
  )
}

export default Headphones