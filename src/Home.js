import {useEffect, useState} from 'react';
import BlogList from  './BlogList';

 
const Home = () => {
    const[blogs,setBlogs]=useState(
   
   null);

     
 
        useEffect(()=>{                                                                              
          fetch(' http://localhost:8001/blogs')                                                          
        
      .then((res)=>{                                                                              
        return res.json();
      })
      .then((result)=>{
        
        console.log(result);
        setBlogs(result)


      })
          
        },[]);
     

   
    return (
      <div className="home">
      {
           blogs.map((json)=>{
             return <h1>{ json.tittle}</h1>
            
            

           })
      }
 
      
       </div>
        
      );
}
 
export default Home;