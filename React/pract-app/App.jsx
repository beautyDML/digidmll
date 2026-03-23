import Card from ".components/Card";
function App(){
    return(
        <div>
            <h1>My Cards</h1>
            <Card 
            title="Card 1"
            description="this is first card"
            color="lightblue"
            />
             <Card
            title="Card 2"
            description="this is first card"
            color="lightpink"
            />
             <Card 
            title="Card 3"
            description="this is first card"
            color="lightgreen"
            />
        </div>
    );
}
export default App;