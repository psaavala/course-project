function MyHeader({image, title}) {
    return (
        <div>
            <img src={image} alt={title} />
            <h1>{title}</h1>  
        </div>  
    );
    }
    
    
    
    
    export default MyHeader