import {Link} from 'react-router-dom';


const Nvbar  = () => {
    return (  
        <nav className="navbar">
           <h1>Dojo blog</h1> 
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