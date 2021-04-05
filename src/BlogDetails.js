import { useParams } from "react-router";
import useFetch from './UseFetch';

const BlogDetails = () => {

     const{id}=useParams();
     const{blogs, isPending, error} = useFetch('  http://localhost:8003/blogs/1');
    return ( 

        <div className="blog-details">
          {error?<h1> {error}</h1>:<h1> error free message</h1>}
          {isPending?<h1> loading..</h1>:<h1> nothing</h1>}
          {blogs&&(
              <article>
                  <h2>{blogs.tittle}</h2>
                  <p> Written by{ blogs.author}</p>
                  <div>{ blogs.body}</div>
              </article>
          )}
        </div>
     );
}
 
export default BlogDetails;