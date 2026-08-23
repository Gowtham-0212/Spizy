import './hero.css'
import {useNavigate} from 'react-router-dom'
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
            <div className="banner-reviews">
                {/* <h2>Explore our menu</h2> */}
                
            </div>
           
        </>
    )
}
export default Hero