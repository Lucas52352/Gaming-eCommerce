import './LoaderPagination.css'
import Lottie from 'lottie-react'
import loaderPagination from './assets/loaderRojo.json'

const Loader = () => {
  return (
    <div className='divLoaderPagination'>
        <Lottie className='loaderPagination' animationData={loaderPagination} loop={true}/>
    </div>
  )
}

export default Loader