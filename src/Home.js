import {useState} from 'react';
 
const Home = () => {
    const[blogs,setBlogs]=useState([
    {tittle:'my new website',body:'loreum ispsum',author:'robert',id:1},
    {tittle:'my  website',body:'loreum ispsum',author:'shenoy',id:2},
    {tittle:'website',body:'loreum ispsum',author:'tagore',id:3},
   ]);

   
    
        
        
    
   
    return (
        <div className="home">
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
 
export default Home;