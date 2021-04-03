import{ useState,useEffect} from 'react';







       const useFetch=( url) =>{
        const[blogs, setData] =useState([]);
        const[isPending, setIsPending]=useState(true);
        const[error, setError]=useState(null);

        
    





        useEffect(()=>{  
            setTimeout(()=>{
              fetch(url)                                                     
              .then((res)=>{   
                console.log(res)
                if(!res.ok)   {
                throw Error('could not fetch for that api');
                }                                                                        
                return res.json();
              })
              .then((result)=>{
                
                console.log(result);
                setData(result)
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
          
          },[url]);
       

          
       
       return {blogs, isPending, error}
      }

       export default useFetch;