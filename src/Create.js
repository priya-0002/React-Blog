
import {useState} from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {
    const[tittle,setTittle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('mario');
    const[isPending,setIsPending]=useState(false);
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog ={tittle,body,author};
        setIsPending(true);
       fetch(' http://localhost:8003/blogs',{method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(blog)
}).then(()=>{
    console.log('new blog added');
    setIsPending(false)
    history.go(-1);
})
       
        
    }
    
    
    
    
    
    return ( 
        <div classname="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Blog:Tittle
                </label>
                <input
                type ="text"
                required
                value={tittle}
                onChange={(e)=>setTittle(e.target.value)}

                />
                 <label>
                    Blog Body:
                </label>
                <textarea
              
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                
                />
                 <label>
               Blog Author:
                </label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
               {!isPending?<button>Add Blog</button>:<button disabled>Adding Blog</button> }
              
                <p>{tittle}</p>
                <p>{body}</p>
                <p>{author}</p>
             

         
            </form>
        </div>
     );
}
 
export default Create;