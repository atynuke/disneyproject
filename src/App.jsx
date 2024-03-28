import DisneyHeader from './component/Disneyheader/disneyHeader.jsx';
import DisneyHero from './component/Hero/Hero.jsx';
import SelectCart1 from './component/Series/SelectCart1.jsx';
import CartoonTy from './component/Series/CartoonType.jsx';
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
      <SelectCart1/>
     </div>

    </>
  )
}

export default App
