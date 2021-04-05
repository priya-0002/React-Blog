 import {Link} from "react-router-dom"
 
 const BlogList = (props) => {
    const{blogers}=props;
    return (
        <div className="blog-list">
            {blogers.map((blog) => (
             <div className="blog-preview" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}>
        <h2>
            {blog.tittle}
             </h2>
             <p> written by { blog.author}</p>
        </Link>
            
             
             </div>
           ))}
        </div>
      );
}
 
export default BlogList ;