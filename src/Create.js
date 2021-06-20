
import { useState } from "react";

const Create = () => {
  const [tittle, setTittle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const[isPending,setIsPending]=useState('false');

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { tittle, body, author };
    setIsPending(true);

    fetch('http://localhost:8003/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label style={{
                    width:'300px'}}>Blog title:</label>
        <input 
          type="text" 
          required 
          value={tittle}
          onChange={(e) => setTittle(e.target.value)}
        />
        <label>Blog body:</label>
        
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Robin">Robin</option>
          <option value="Shenoy">Shenoy</option>
        </select>
       {!isPending?<button>Adding  Blog</button>:<button>Add Blog</button>} 
      </form>
    </div>
  );
}
 
export default Create;