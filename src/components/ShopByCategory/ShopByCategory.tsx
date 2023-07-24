import './ShopByCategory.css'
import { Link } from 'react-router-dom'
const ShopByCategory = () => {
  return (
    <div className='sectionCategories'>
        <Link to="/keyboards" className='linkP'>
        <div className='categoryKeyboard'>
            <p className='categoryText'>Keyboards</p>
        </div>
        </Link>
        <Link to="/headphones" className='linkP'>
        <div className='categoryHeadphones'>
            <p className='categoryText'>Headphones</p>
        </div>
        </Link>
        <Link to="/mouses" className='linkP'>
        <div className='categoryMouses'>
            <p className='categoryText'>Mouses</p>
        </div>
        </Link>

    </div>
  )
}

export default ShopByCategory