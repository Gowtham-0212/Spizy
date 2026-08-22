import './Card.css'
import { useContext } from 'react'
import { CartContext } from '../../cart/CartProvider'

function Cards(props) {

    const { addToCart } = useContext(CartContext)

    return (
        <div className="card">

            <img src={props.img} alt="/" />
            <div className="details">
                <h2>₹{props.price}</h2>
                <p>{props.name}</p>
                <button onClick={() => addToCart(props)}>
                    Add to 🛒
                </button>
            </div>

        </div>
    )
}

export default Cards