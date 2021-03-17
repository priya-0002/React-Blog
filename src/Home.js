import {useState} from 'react';
import BlogList from  './BlogList';

 
const Home = () => {
    const[blogs,setBlogs]=useState([
    {tittle:'my new website',body:'loreum ispsum',author:'robert',id:1},
    {tittle:'my  website',body:'loreum ispsum',author:'shenoy',id:2},
    {tittle:'website',body:'loreum ispsum',author:'robert',id:3},
   ]);

   
    const  handleDelete = (id)=> {
      const newBlogs=blogs.filter(blog=>blog.id!==id)
      setBlogs(newBlogs);
    }
        
     

   
    return (
      <div className="home">
        <h1>All Blog's</h1>
       <BlogList blogers={blogs} handleDelete={handleDelete} />
     
      
      
       </div>
        
      );
}
 
export default Home;