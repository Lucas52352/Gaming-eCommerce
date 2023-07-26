import { useState } from 'react'
import { useSelector } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import './Searchbar.css'


const Searchbar = () => {
    const [search , setSearch] = useState("")
    const productos = useSelector((state:any) => state.products)
    const searcher = (event:any)=>{
        setSearch(event.target.value)
      }
      const cleanState = ()=>{
        setSearch("")
      }
      const results = !search ? productos: productos.products.filter((item:any)=> item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='sectionSarchbarMobile'>
        <div className="searchContainerMobile">
            <div className='sectionSearchBarMobile'>
                <div style={{marginTop:50}}>
                    <input value={search} onChange={searcher} placeholder='Search...' className='searchMobile' type="search" />
                    <SearchIcon className='searchIconMobile'/>
                </div>
            <div>
                {
                  search
                  ?
                 <div className='searchcontainMobile'>
                 {
                   results.map((item:any)=>{
                     return(
                       <div className='containerInfoPMobile'>
                         <Link to={`/product/${item.id}`} className='linkPMobile' onClick={()=> cleanState()}>
                           <div style={{display:'flex', alignItems:'center'}}>
                             <img style={{width:50, margin:10}} src={item.image} alt="" />
                             <p className='searchPMobile'>{item.name}</p>
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
</div>
  )
}

export default Searchbar