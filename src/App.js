// import logo from './logo.svg';
// import './App.css';
import { Blocks } from './Components/Blocksection';
import { Herosection } from './Components/Herosection';
import { Virtual } from './Components/Virtualworld';
import { Web } from './Components/Websection';
import { Services } from './Components/Services';

function App() {
  return (
    <div className="App">
      <Herosection />
      <Blocks />
      <Virtual />
      <Web />
      <Services />
    </div>
  );
}

export default App;
