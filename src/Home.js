import {useEffect, useState} from 'react';
import BlogList from  './BlogList';

 
const Home = () => {
    const[blogs,setBlogs]=useState([]); 
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState(true);

     
 
        useEffect(()=>{  
          setTimeout(()=>{
            fetch('http://localhost:8001/blogs')                                                     
            .then((res)=>{   
              console.log(res)
              if(!res.ok)   {
              throw Error('could not fetch for that api');
              }                                                                        
              return res.json();
            })
            .then((result)=>{
              
              console.log(result);
              setBlogs(result)
              console.log(blogs)
             setIsPending(false)
             setError(null)
      
            })
            .catch(err=>{
              setIsPending(false)
              setError(err.message)
            
            })
                
          },1000

          )
        
        },[]);
     

   
    return (
      <div className="home">
        {error?<h1> {error}</h1>:<h1> error free message</h1>}
      {isPending?<h1> loading..</h1>:<BlogList blogers={blogs}/>
        
        }
        </div>
        
        
    
 
      
       
        
      );
}
 
export default Home;