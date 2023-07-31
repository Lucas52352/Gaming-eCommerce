import { useSelector } from 'react-redux';
import "./carrito.css";
import { useNavigate } from 'react-router-dom';

function Carrito() { 
  const navigate = useNavigate()
  const cart = useSelector((state:any) => state.cart.cartProducts)
  console.log(cart);
  const total = cart.map((item:any)=> {
    return item.product.map((prod:any)=>{
      return (prod.price * item.cant)
    })
  })

  console.log(total);
  

  let numbers = 0;
  for (let i = 0; i < total.length; i++) {
    const element = total[i];
    if(element){
      numbers += Math.floor(element[0])
    }
  } 
  console.log(numbers, "Numbers");
  
  return (
    <div className='carContainer'>
      <hr />
        {
          cart
          ?
          <div className='cartAllContainer'>
            {

              cart.map((prod:any)=>{
                return(
                  <div className='div'>
                    {
                      prod.product.map((item:any)=>{                        
                      return(
                      <div className='cartContainer'>
                        
                        <img src={item.image[0]} alt={item.name} className='imageCart'/>
                        <div className='cartInfo'>
                        <h3 id="h3">{item.name}</h3>
                        <hr className='hr'/>
                        </div>
                        <h4 id="h3">${item.price * prod.cant}</h4>
                        <h3 id="h3"> Quantity:{prod.cant}</h3>
                      </div>
                      )
                    }) 
                  }
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