'use strict';


function Price(props){
    const baseUrl = 'https://api.binance.com/api/v3/ticker/price?symbol='+props.symbol;
    const [price, setPrice] = React.useState("Loding...");
    const [temp, setTemp] = React.useState(false);
    let req = new XMLHttpRequest();
    React.useEffect(() => {
        setTimeout(() => {
            setTemp(!temp);
            req.open('GET',baseUrl,true);
            req.send();
            req.onload = (() => {
                setPrice('$'+JSON.parse(req.responseText).price);
                
            });
        },500);
        
    }, [temp]);
    let style = { 
        backgroundColor:"black", 
        color:"white", 
        fontSize:"5em", 
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }

    return(
        <div style={style}>
            <div>{props.name}</div>
            <div>{price}</div>
        </div>
    )
}

