import {useHistory, useParams } from "react-router";
import useFetch from './UseFetch';


const BlogDetails = () => {

     const{id}=useParams();
     const history =useHistory();
     const{blogs, isPending, error} = useFetch('  http://localhost:8003/blogs/'+ id);
     const handleClick=()=>{
        fetch('http://localhost:8003/blogs/' + blogs.id, {
            method:'DELETE'
         }).then(()=>{
             history.push('/')

         })
         

     }
    return ( 

        <div className="blog-details">
          {error?<h1> {error}</h1>:<h1> </h1>}
          {isPending?<h1> loading..</h1>:<h1></h1>}
          {blogs&&(
              <article>
                  <h2>{blogs.tittle}</h2>
                  <p> Written by{ blogs.author}</p>
                  <div>{ blogs.body}</div>
                  <button onClick={handleClick}>Delete</button>
              </article>
          )}
        </div>
     );
}
 
export default BlogDetails;