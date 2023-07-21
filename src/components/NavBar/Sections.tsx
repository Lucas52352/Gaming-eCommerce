import './Sections.css'
import { Link } from 'react-router-dom'

const Sections = () => {
  return (
    <div>
            <div className='buttons'>
              <Link to="/">
                <button className='btnNav'>Home</button>
              </Link>
              <Link to="/keyboards">
                <button className='btnNav'>Keyboards</button>
              </Link>
              <Link to="/mouses">
                <button className='btnNav'>Mouses</button>
              </Link>
              <Link to="/headphones">
                <button className='btnNav'>Headphones</button>
              </Link>
            </div> 
        
    </div>
  )
}

export default Sections