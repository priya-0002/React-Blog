import logo from './logo.svg';
import './App.css';
import Nvbar from './Nvbar';
import Home from './Home';
import Greet from'./Greet';
function App() {
  const t='welcome priya'
  const likes=90;
  const link="www.google.com";
  return (
    <div className="App">
      <Nvbar/>
     
     <div className="content">
     <Home/>
     <div className="new">
      
     <Greet name="India" heroName="batman" subject="english"/>
     <Greet name="New-Zeland" heroName="batman" subject="english"/>
     <Greet name="New-Zeland" heroName="batman" subject="english"/>
   
     </div>

     </div>
    </div>
  );
}

export default App;
