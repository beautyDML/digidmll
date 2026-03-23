const name="Rahul";
const age=22;
return(
    <div>
        <p>Hello, {name}!</p> {/* //{} for js */}
        <p>Age: {age+1}</p>
        <p>{2*3}</p>
        <p>{name.toUpperCase()}</p>  { /*method call*/}
    </div>
    //div is parent
)


function UserCard(){
    return(
        <div className="card">
            <img src="#" alt="user"/>
            <h2>Rahul singh</h2>
            <button>Follow</button>
        </div>   
     );
}

<UserCard/>


//inside jsx we cann't write if else loop for this we have to use ternary operator or array methodinstaed.

// ### REact: 
// - ui library,,use to make reusable ui component(it  breaks the ui into small pices called component)

// - changes the ui as per data changes

// # 1. JSX :
// *** JSX ***
// * IT BASICALLY the html inside the javascript
// * for ex: 
// ```JSX
// const element=<h1>Hello world</h1>;

// - now how react compile it

// const element = React.CreateElement('h1',null,"hello world")

// ```
// ***IMPORTANT:**
//it must should be return single parent 
// - class becomes ***className** (becuase class is reserved word in js)
// - for become HTMLfor
// - self closing tags need/> -> ex: <input/>, <img/> <br/>
// - inline styles use objects: style={{"{color:'red',fontsize:'16px'}"}}
// - use {} for js



//2. Component:(must start with capital letter)
//reusables pieces of ui (break the ui into small pieces call compoenent- react is basically combination of component)
//we have basically two types of component in react
// - function component
// - reusable component
// const Card = () => {
//   return <div>Product</div>;
// };

//reusable
// const Card = ({ name, price }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{price}</p>
//     </div>
//   );
// };

//every reusable is functional
//but not every functional is reusable


// function fnc(){
//     return <h1>Hello nova</h1>;
// }
// export default App;

// //reusable component
// const card=(){
//     return(
//         <div>
//         <h2>title</h2>
//         <p>desc</p>
//         </div>
//     );
// };

// function Greeting(){
//     return <h1>Hello from a component!</h1>
// }


// function App(){
//     return(
//         <div>
//             <Greeting/>
//              <Greeting/>
//               <Greeting/>
//                <Greeting/>
//         </div>
//     )
// }


//return only one root element- wrap multiple element in <></> (fragment) or <div>
//<></>=fragmentit wrap element without adding extra html to page



//3. Props: 
//props - properties(how we pass data into the component)
//compoenent receive props as a function arguments
//its read only inside a component never modify them (follow one way parent->child)

// function Greeting(props){
//     return <h2>Hello, {props.name}</h2>;
// }


// <Greeting name="Rahul"/>
// <Greeting name="Arjun"/>



// const Card=(props)=>{
//     return (
//        <div>
//         <h2>{props.title}</h2>
//         <p>{props.desc}</p>
//        </div>
//     );
// };

// <Card title="React" desc="JS library"/>
// <Card title="Node" desc="backend"/>


//Desctructing props(cleaner way):
function UserCard({name,age,role}){
    return (
        <div>
            <h2>
                {name}
            </h2>
            <p>
                {role} . {age} years old
            </p>
        </div>
    );
}

//usage
<UserCard
name="Rahul"
age={22}
role="Developer"
/>