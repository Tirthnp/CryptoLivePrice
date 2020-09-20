'use strict';


function Price(props){
    const baseUrl = 'https://api.binance.com/api/v3/ticker/price?symbol='+props.symbol;
    const [price, setPrice] = React.useState("Loding...");
    let req = new XMLHttpRequest();
    
    
    const updatePrice = () => {
        setPrice('$'+JSON.parse(req.responseText).price);
        req.open('GET',baseUrl,true);
        req.send();
    }
    req.open('GET',baseUrl,true);
    req.onload = updatePrice
    req.send();
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

