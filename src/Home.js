import {useEffect, useState} from 'react';
import BlogList from  './BlogList';
import useFetch from './useFetch';

 
const Home = () => {
  const{data:blogs, isPending, error} = useFetch('  http://localhost:8000/blogs');
   

     
 
      

   
    return (
      <div className="home">
        {error?<h1> {error}</h1>:<h1> error free message</h1>}
      {isPending?<h1> loading..</h1>:<BlogList blogers={blogs}/>
        
        }
        {blogs&&<BlogList blogs={blogs} tittle='All Blogs'/>}
        
        </div>
        
        
    
 
      
       
        
      );
}
 
export default Home;