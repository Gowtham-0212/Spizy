import { useContext } from "react"
import { CartContext } from "./CartProvider"
import './cart.css'
import {Link} from 'react-router-dom'


function Cart() {

    const { cart,setCart } = useContext(CartContext)
   
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0)

    const increaseQuantity = (id) => {
        setCart(cart.map((item) => item.id === id? 
                    { ...item, quantity: item.quantity + 1 }:item))}

    const decreaseQuantity = (id) => {
    setCart( cart.map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item  
            ).filter((item) => item.quantity > 0)
    )
}

    return (
        <>
        <br />
        <hr />
        <br />
            <div className="cart-container">

                <h1 id="cart-txt">My Cart 🛒</h1>

                {cart.length === 0 ? (<p id="empty">Your cart is empty...</p>):
                    (
                    <div id="container">
                        {
                            
                            cart.map((item, index) => (
                        <div id="card" key={item.id}>

                            <img src={item.img} alt={item.name} />

                            <div id="details">
                                <h3>{item.name}</h3>
                                <p>Quantity: {item.quantity}</p>

                                 <div className="inner-details">
                                    <h3 id="inc" onClick={()=>increaseQuantity(item.id)}>+</h3>
                                    <h3 id="dec" onClick={()=>decreaseQuantity(item.id)}>-</h3>
                                </div>
                               
                            </div>
                        
                        </div>
                        
                    ))
                        }
                    </div>
                
                )}
                
            </div>
            <hr />
            <br />
           {total !== 0 && (
                <div id="bill-wrap">
                    <h2> Summary:</h2>
                    <br />
                    <div className="tb">
                        <table>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>Name</th>
                                    <th>Qty</th>
                                    <th>Rs</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>

                                { cart.map((x,inde)=>(
                                    <tr key={x.id}>
                                        <td>{inde + 1}</td>
                                        <td>{x.name}</td>
                                        <td>{x.quantity}</td>
                                        <td>{x.price}</td>
                                        <td>₹{x.quantity * x.price}</td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                   
                    
                
                    <br />
                    <h3>To Pay: ₹{total}</h3>
                    <button id="bill">Proceed To Pay</button>
                    <p className="note">Note: Payment can be done only if 
                        you're logged in ...if not <Link to="/login">Click Here</Link> </p>
                </div>)}
         
        </>
      
    )
}

export default Cart