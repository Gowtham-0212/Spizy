import { useState } from 'react'
import './Navbar.css'
import { useNavigate,Link } from 'react-router-dom'

function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const navigate=useNavigate()

    function show() 
    {
        setShowMenu(!showMenu)
    }
    const home=()=> navigate("/")

    const close=()=> setShowMenu(!showMenu)
    // const offer=()=>navigate("/offers")

    return (
        <nav>
            <h1 className='logo' onClick={home}>SPIZY</h1>

            <ul className={`nav-links ${showMenu ? "showMenu" : ""}`}>
                <li><Link to="/" onClick={close}>Home</Link></li>
                <li><Link to="/menu" onClick={close}>Menu</Link></li>
                <li><Link to="/offers" onClick={close}>Offers</Link></li>
                <li><Link to="/about" onClick={close}>About us</Link></li>
            </ul>

            <h2 id="cart">
                <Link to = "/cart">🛒</Link>
            </h2>

            <h2 id="menu" onClick={show}>
                <a href="#">{!showMenu?"☰":"X"}</a>
            </h2>
        </nav>
    )
}

export default Navbar