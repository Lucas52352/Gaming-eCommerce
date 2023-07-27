
import Lottie from 'lottie-react'
import aniamtionDelete from './assets/deleteAnimation.json'
import './LoaderDelete.css'


const Loader = () => {
  return (
    <div className='divLoaderDelete'>
        <Lottie className='loaderDelete' animationData={aniamtionDelete} loop={true}/>
    </div>
  )
}

export default Loader