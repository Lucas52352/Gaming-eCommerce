import { useSelector } from 'react-redux';
import "./carrito.css";
import { useNavigate } from 'react-router-dom';

function Carrito() {
  const navigate = useNavigate()
  const cart = useSelector((state:any) => state.cart.cartProducts)
  console.log(cart);
  const total = cart.map((item:any)=> item.product)
  
  const totally = total.map((item:any)=> {

   return item.map((itemBi:any)=>{
    return itemBi.price
   })
  }
  )
  let numbers = 0;
  for (let i = 0; i < totally.length; i++) {
    const element = totally[i];
    if(element[0]){
      numbers += Math.floor(element[0])
    }
  } 
  const bought = ()=>{

  }
  return (
    <div className='carContainer'>
      <hr />
        {
          cart
          ?
          <div className='cartAllContainer'>
            {

              cart.map((item:any)=>{
                return(
                  <div className='div'>
                    {
                      item.product.map((item:any)=>{
                      return(
                      <div className='cartContainer'>
                        <img src={item.image[0]} alt={item.name} className='imageCart'/>
                        <div className='cartInfo'>
                        <h3 id="h3">{item.name}</h3>
                        <hr className='hr'/>
                        </div>
                        <h4 id="h3">${item.price}</h4>
                      </div>
                      )
                    }) 
                  }
                    <h3 id="h3"> Quantity:{item.cant}</h3>
                  </div>
                )
              })
            }
          </div>

          :
          <h1>Empty Cart...........</h1>
        }
      <div style={{display:"flex", alignItems:"center", flexDirection:"column", margin: "40px", width:"100vw", justifyContent:"end"}}>
      <p>Total: {numbers}$</p>
     <button className='bought' onClick={()=>{
      if(cart.length > 0){
        navigate("/payments")
      }
     } 
     }>Buy</button>
        </div>
   </div>
  )
}

export default Carrito