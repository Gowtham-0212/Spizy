import './footer.css'
import { useNavigate } from 'react-router-dom'

function Footer()
{
    const navi=useNavigate()

    return(
        <>
        <footer>
             <div className="container0">
                <div className="content">
                    <h2 id='subHead'>SPIZY</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, pariatur. Delectus omnis vitae velit voluptatem officia perferendis earum aut praesentium fugiat blanditiis, sint dolor rerum eum quia distinctio expedita asperiores sed laboriosam esse non pariatur!</p>
                </div>
                <div className="content">
                    <h3>Quick Links</h3>
                    <ul id='foot'>
                        <li >Home</li>
                        <li >Menu</li>
                        <li>Cart</li>
                        <li>Offers</li>
                    </ul>
                </div>
                <div className="content">
                    <h3>Get in Touch</h3>
                    <ul>
                        <li>+91 9710101095</li>
                        <li>ggj97596@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr id='f'/>
            <p id='fo'>© All rights reserved.</p>
            <br />

        </footer>
           
        </>
    )
}
export default Footer