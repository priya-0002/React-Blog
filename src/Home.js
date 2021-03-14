import {useState} from 'react';
import Bloglist from './bloglist';
 
const Home = () => {
    const[blogs,setBlogs]=useState([
    {tittle:'my new website',body:'loreum ispsum',author:'robert',id:1},
    {tittle:'my  website',body:'loreum ispsum',author:'shenoy',id:2},
    {tittle:'website',body:'loreum ispsum',author:'tagore',id:3},
   ]);

   
    
        
        

   
    return (
        <div className="home">
           <Bloglist blogs={blogs} tittle="mmmmmmmmm"/>
        </div>
        
      );
}
 
export default Home;