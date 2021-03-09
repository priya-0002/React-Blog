import logo from './logo.svg';
import './App.css';
import Nvbar from './Nvbar';
import Home from './Home';
function App() {
  const t='welcome priya'
  const likes=90;
  const link="www.google.com";
  return (
    <div className="App">
      <Nvbar/>
     
     <div className="content">
     <Home/>

     </div>
    </div>
  );
}

export default App;
