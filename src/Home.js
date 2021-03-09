import {useState} from 'react';
 
const Home = () => {

    const[name,setName]=useState('mario');
    const[age,setAge]=useState(25);

    const handleClick=()=> {
        setName('jia ');
        setAge(30);
    }
        
        
    
    const handleClickAgain=(name)=>
        alert('hello' +'' +name);
    
    return (
        <div className="home">
            <h2>Homepge</h2>
            <p>{name } is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        <button onClick={()=>
            handleClickAgain('mario')
        }>Click me Again</button>
        </div>
      );
}
 
export default Home;