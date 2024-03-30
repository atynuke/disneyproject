import DisneyHeader from './component/Disneyheader/disneyHeader.jsx';
import DisneyHero from './component/Hero/Hero.jsx';
// import CartBuild from "./component/Series/CartBuild.jsx"


import './App.css'
import Cart1 from './component/Series/CartBuild.jsx';
import CartBond from './component/Series/cartone.jsx';


function App() {

  return (
    <>
      <div>  
        <DisneyHeader/>
      </div>
      
      <div>  
        <DisneyHero/>
      </div>

      <div>
          <CartBond/>
      </div>

      <div>
        <Cart1/>
      </div>
    </>
  )
}

export default App
