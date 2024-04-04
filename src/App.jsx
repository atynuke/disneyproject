import DisneyHeader from "./component/Disneyheader/disneyHeader.jsx";
import DisneyHero from "./component/Hero/Hero.jsx";
import GridOne from "./component/Series/grid1.jsx";
import GridTwo from "./component/Series/grid2.jsx";
import GridThree from "./component/Series/grid3.jsx";
import "./App.css";

function App() {
  return (
    <>
      <DisneyHeader />
      <DisneyHero />
      <GridOne />
      <GridTwo />
      <GridThree />
    </>
  );
}

export default App;
