import {useEffect, useState} from 'react';
import BlogList from  './BlogList';
import useFetch from './UseFetch';

 
const Home = () => {
  const{blogs, isPending, error} = useFetch('  http://localhost:8003/blogs');
   

     
 

      return (
      <div className="home">
        {error?<h1> {error}</h1>:<h1> error free message</h1>}
      {isPending?<h1> loading..</h1>:<BlogList blogers={blogs}/>
        
        }
        {blogs&&<BlogList blogers={blogs} tittle='All Blogs'/>}
        
        </div>
        
        
    
 
      
       
        
      );
}
 
export default Home;