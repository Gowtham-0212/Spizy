import './Card.css'
import { useContext,useState } from 'react'
import { CartContext } from '../../cart/CartProvider'

function Cards(props) {

    const { addToCart } = useContext(CartContext)
    const [message, setMessage] = useState("");

    function handle(props)
    {
        addToCart(props)
        setMessage("Added to cart!");

        setTimeout(() => {
            setMessage("");
        }, 2000);
    }
    
    return (
        <div className="card">

            <img src={props.img} alt="/" />
            <div className="details">
                <h2>₹{props.price}</h2>
                <p>{props.name}</p>
                <button onClick={() => handle(props)}>
                    Add to 🛒
                </button>
            </div>
              {message && <div className="popup">{message}</div>}
        </div>
      
    )
}

export default Cards