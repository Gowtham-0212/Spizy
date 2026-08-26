import './hero.css'
import {useNavigate} from 'react-router-dom'
import Review from '../Data/Review'

function Hero()

{
    const navigate=useNavigate()
    const menudis = () => navigate("/menu")
    return(
        <>
            <div className="banner">
                <div className='ban-child'>
                    <h1 className='ban-text'>Turn up the flavor with Spizy . . .</h1>
                    <button className='ban-button'onClick={menudis}>ORDER</button>
                </div>
                    
            </div>

            <br />
            <hr />
            <br />
            
            <h1 className='ban-head'>Hear It From Our Customers</h1>
            <div className="reviews">
                {
                Review.map(
                    (item) => (
                    <div className='rev-cards'>
                        <img src={item.image} alt="" />
                            <div className="rev-details">
                                <h4>
                                    {item.name} ~ ⭐ {item.rating}
                                </h4>
                                <p>
                                    {item.opinion}
                                </p>
                            </div>
                    </div>
                        )
                )
                  
                }
              
            </div>
           
        </>
    )
}
export default Hero