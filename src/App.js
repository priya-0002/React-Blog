import logo from './logo.svg';
import './App.css';
import Nvbar from './Nvbar';
import Home from './Home';
import Create from './Create';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
function App() {
  const t='welcome priya'
  const likes=90;
  const link="www.google.com";
  return (
    <Router>
    <div className="App">
      <Nvbar/>
     
     <div className="content">
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/create">
         <Create/>
       </Route>
       <Route path="/blogs/:id">
         <BlogDetails/>
       </Route>
     </Switch>
  
     </div>
    </div>
    </Router>
  );
}

export default App;
