import DisneyHeader from './component/Disneyheader/disneyHeader.jsx';
import DisneyHero from './component/Hero/Hero.jsx';
import SelectCartoon from './component/Series/Selection.jsx';
import CartoonType from './component/Series/CartoonType.jsx';
import './App.css'


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
        <SelectCartoon/>
      </div> 

       <div>  
        <CartoonType/>
      </div> 
    </>
  )
}

export default App
