import './Loader.css'
import Lottie from 'lottie-react'
import loader from './assets/loader.json'

const Loader = () => {
  return (
    <div className='divLoader'>
        <Lottie className='loader' animationData={loader} loop={true}/>
    </div>
  )
}

export default Loader