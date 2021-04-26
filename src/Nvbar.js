import {Link} from 'react-router-dom';
import "./navbar.css"




const Nvbar  = () => {
    return (  
       
        <nav className="navbar">
           
           <h1 >Blog Spot</h1> 
            <div className="links">
                <Link to="/" style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'}}
                > Home</Link>

                <Link to="/create"style={{
                    color:"white",
                    backgroundColor:'#f1356d',
                    borderRadius:'8px'
                }}>New Blog</Link>
                
            </div>

            
        </nav>
    );
}
 
export default Nvbar;