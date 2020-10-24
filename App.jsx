'use strict';

//import Price from './Price';

const e = React.createElement;
 

function App(props) {
  return (
    <div style = {{ display: 'flex', 
    flexDirection: 'column', 
    justifyContent:"space-evenly", 
    height:'max-content', 
    backgroundColor:'black',
    width: 'max-content',
    margin: 'auto',
    marginTop: '75px',
    marginBottom: '75px'
    }}>
      <Price symbol="BTCUSDT" name="Bitcoin"/>
      <Price symbol="ETHUSDT" name="Ethereum"/>
      <Price symbol="DOTUSDT" name="PolkaDot"/>
      <Price symbol="XRPUSDT" name="Ripple"/>
    </div>
  );
  
}

const domContainer = document.querySelector('#the_App');
ReactDOM.render(e(App), domContainer);