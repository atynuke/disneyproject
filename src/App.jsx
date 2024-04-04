import DisneyHeader from './component/Disneyheader/disneyHeader.jsx';
import DisneyHero from './component/Hero/Hero.jsx';
import GridTwo from './component/Series/grid2.jsx';


import './App.css'
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
      <GridTwo/>

    </>
  )
}

export default App
