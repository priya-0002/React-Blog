
import {useState} from "react";
const Create = () => {
    const[tittle,setTittle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('mario');
    return ( 
        <div classname="create">
            <h2>Add a New Blog</h2>
            <form >
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
                
                ></textarea>
                 <label>
               Blog Author:
                </label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{tittle}</p>
                <p>{body}</p>
                <p>{author}</p>
             

         
            </form>
        </div>
     );
}
 
export default Create;