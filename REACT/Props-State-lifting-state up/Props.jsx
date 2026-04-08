//react component use the props to communicate btw the component
//use to pass data from parent to child component(one way direction only parent->child)

//always come as one object
//props read only(immutable)
//use props inside html tags inside {} <h1>{props}</h1>

//in props you can pass anything array,string,function,object,number..anything..even pass whole component as a props


//but better way to use like this instead of props..unpack the object inside the {};
//function welcome(props){return(<h1>hello props.name</h1>)}---beginner way to use

//profession way: 
// function welcome({name,age,city="ludhiana"}){
//     return(
//         <>
//         <p>{name} is {age} years old lives in {city}</p>
//         </>
//     )
// }


