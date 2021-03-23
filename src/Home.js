import {useEffect, useState} from 'react';
import BlogList from  './BlogList';

 
const Home = () => {
    const[blogs,setBlogs]=useState([]); 
    const[isPending,setIsPending]=useState(false);

     
 
        useEffect(()=>{  
          setTimeout(()=>{
            fetch('http://localhost:8001/blogs')                                                     
            .then((res)=>{                                                                              
              return res.json();
            })
            .then((result)=>{
              
              console.log(result);
              setBlogs(result)
              console.log(blogs)
             setIsPending(true)
      
            })
                
          }

          )                                                                            
        
        },[]);
     

   
    return (
      <div className="home">
      {isPending?<BlogList blogers={blogs}/>:<h1> loading..</h1>
        
        }
        </div>
        
        
    
 
      
       
        
      );
}
 
export default Home;