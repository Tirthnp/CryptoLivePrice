'use strict';


function Price(props){
    const baseUrl = 'https://api.binance.com/api/v3/ticker/price?symbol='+props.symbol;
    const [price, setPrice] = React.useState("Loading...");
    const [temp, setTemp] = React.useState(false);
    const [prevPrice, setPrevPrice] = React.useState(-9999999);


    let req = new XMLHttpRequest();
    React.useEffect(() => {
        setTimeout(() => {
            setTemp(!temp);
            req.open('GET',baseUrl,true);
            req.send();
            req.onload = (() => {
                setPrevPrice(price);
                setPrice(Number(JSON.parse(req.responseText).price));

            });
        },500);
        
    }, [temp]);


    const setColor = (() => {
        if(!(typeof(price) === 'string')){
            if(price >= prevPrice) {
                return '#7CFC00'
            }
            else return '#FF0000'
        }
        else return 'white'
    })

    let style = { 
        backgroundColor:"black", 
        color:setColor(), 
        fontSize:"5em", 
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
    return(
        <div style={style}>
            <div style = {{color: 'white'}}>{props.name}</div>
            <div>{"$ " + price}</div>
        </div>
    )
}

