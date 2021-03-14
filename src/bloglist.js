const Bloglist = (props) => {
    const blogs=props.blogs;
    const tittle=props.title;
   
    return ( 
        <div className="blog-list">
             {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id }>
               <h2>{ blog.tittle}</h2>
               <h2>{blog.author}</h2>
               </div>
            ))
            }
            
        </div>
     );
}
 
export default Bloglist;