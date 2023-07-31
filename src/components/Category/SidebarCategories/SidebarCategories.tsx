import './SidebarCategories.css'
import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logoHyperx from '../../Products/assets/hyperXlogo.png'
import logitechLogo from '../../Products/assets/logoLogitech.png'
import astroLogo from '../../Products/assets/logoAstro.png'
import redragonLogo from '../../Products/assets/logoRedragon.png'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import logoRadtek from '../../NavBar/assets/Radtek1.png'

type OnFilterChangeType = (filters: {
    brand: string;
    color: string;
  }) => void;

const SidebarCategories = ({ onFilterChange }: { onFilterChange: OnFilterChangeType }) =>  {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [selectedBrand, setSelectedBrand] = useState("Allbrands");
    const [selectedColor, setSelectedColor] = useState("AllColors")


    
      const handleBrandChange = (event:any) => {
        const selectedBrand = event.target.value;
        console.log(selectedBrand);
        setSelectedBrand(selectedBrand); // Actualizar la marca seleccionada
      };
  
      const handleColorChange = (event:any) => {
        const selectedColor = event.target.value;
        setSelectedColor(selectedColor)
      }

      useEffect(() => {
        onFilterChange({
          brand: selectedBrand,
          color: selectedColor,

        });
      }, [selectedBrand, selectedColor]);

  return (
        <div>
          <button className='btnFilter' onClick={handleShow}>
            Filter <FilterAltIcon/>
          </button>

      <Offcanvas  show={show} onHide={handleClose}>
        <Offcanvas.Header className='headerSidebar' closeButton>
   
            <img className='logoSidebar' src={logoRadtek} alt="Logo" />
            
     
        </Offcanvas.Header>
        <Offcanvas.Body className='sidebar'>
            <div>
              <div style={{textAlign:'center'}}>
                <p style={{fontSize: 24, marginTop: 50}}>Brands</p>
                <button className='btnAllBands' value='Allbrands' onClick={handleBrandChange}>All brands</button>
              </div>
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

        <div style={{textAlign:'center'}}>
          <p style={{fontSize: 24, marginTop: 50}}>Colors</p>
          <button value='AllColors' onClick={handleColorChange} className='btnAllcolors'>All Colors</button>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', justifyItems:'center', textAlign:'center'}}>
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
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default SidebarCategories