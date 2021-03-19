  const BlogList = (props) => {
    const{blogers,handleDelete}=props;
    return (
        <div className="blog-list">
            {blogers.map((blog) => (
             <div className="blog-preview" key={blog.id}>
             <h2>
            {blog.tittle}
             </h2>
             <p> written by { blog.author}</p>
             <button onClick={()=>handleDelete(blog.id)}>delete blog</button>
             </div>
           ))}
        </div>
      );
}
 
export default BlogList ;