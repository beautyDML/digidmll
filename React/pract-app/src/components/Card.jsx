const Card=({title,descriptin,color})=>{
    return(
        <div style={{
            border:"1px solid black",
            padding:"10px",
            margin:"10px",
            backgroundColor:color
        }}>
            <h2>{title}</h2>
            <p>{descriptin}</p>
        </div>
    );
};


export default Card;