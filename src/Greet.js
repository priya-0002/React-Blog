const Greet = (props) => {
   console.log(props)
    return ( 
        <div className="see">
            <h1>The country name is {props.name}

            The country name is {props.subject}
            The country name is {props.heroName}
            
            
            
            
            </h1>   
        </div>
    

     );
}
 
export default Greet;