import './Sections.css'
import { Link } from 'react-router-dom'

const Sections = () => {
  return (
    <div>
            <div className='buttons'>
              <Link to="/">
                <button className='btnNav'>Home</button>
              </Link>
                <button className='btnNav'>Keyboards</button>
                <button className='btnNav'>Mouses</button>
                <button className='btnNav'>Headphones</button>
            </div> 
        
    </div>
  )
}

export default Sections