import logo from './logo.svg';
import './App.css';
import Nvbar from './Nvbar';
import Home from './Home';
import Create from './Create';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Head from './headimage/Head';
import Foot from './foot/Foot';

function App() {
  const t='welcome priya'
  const likes=90;
  const link="www.google.com";
  return (

    <div>
      <Head/>
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
       <Route path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
  
     </div>
    </div>
    </Router>
    <Foot/>
    </div>
  );
}

export default App;
