import Products from './components/products/Product'
import Navbar from './Header/Navbar'
import Category from './Categories/Category'
import Hero from './hero/hero'
import Offer from './offer/offer'
import CartProvide from './cart/CartProvider'
import Cart from './cart/Cart'
import Footer from './footer/footer'

import{BrowserRouter,Routes,Route} from 'react-router-dom'

function App() 
{

    return(
      <CartProvide>
         
         <BrowserRouter>

            <Navbar/>

            <div className='main-content'>

               <Routes>

                  <Route path="/" element={<Hero />} />

                  <Route path="/menu" element={<Category/>} />

                  <Route path='/offers' element={<Offer/>}/>

                  <Route path='/cart' element={<Cart/>}/>

               </Routes> 

            </div>
            
            <Footer/>

         </BrowserRouter>

      </CartProvide>

      
      
       )
}

export default App