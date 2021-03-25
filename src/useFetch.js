import{ useState,useEffect} from 'react';







       const UseFetch=( ) =>{
        const[data,setdata] =useState(null);
        const[isPending,setIsPending]=useState(true);
        const[error,setError]=useState(null);

        
    





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
                setBlogs(result)
                console.log(data)
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
       

          
       }
       return {data, isPending, error}

       export default useFetch;