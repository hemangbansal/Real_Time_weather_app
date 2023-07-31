import './App.css';

import Tempapp from './components/TempApp';
import Particles from './components/Particle';
import { loadFull } from "tsparticles";
function App() {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };
  return (
    <>
    <div>
      {/* <h1>hello</h1> */}
      <Particles/>
      <Tempapp/>
      <h1>gr better than gb </h1>
      
    </div>
    </>
  );
}

export default App;