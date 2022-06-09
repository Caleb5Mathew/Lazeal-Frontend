
import React from 'react';
import Plot from 'react-plotly.js';
import Stock from '../stockmap/StockScraper.jsx';
// var Stocks = require('./chartstockaccess')
// var stocks = new Stocks('2JW0VYC6INQB3DD7'); // Replace with your own



// // FPromise()
// //    .then(request(result){
// //            console.log(result)
// //          });
        
// async function request(sym) {
  
//     var result = await stocks.timeSeries({
//       symbol: sym,
//       interval: '1min',
//       amount: 1
      
//      });
  
//     //   .THEN FUNCTION CHECK HISTORY 
    
// }
// async function opens(sym) {
//   var output = await stocks.
  
// }


// console.log(request('AAPL'))



// var datainp = 
// data = request(
//  datainp
// )
// console.log(data)
// result1 = data


class StockScraper extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.state = {
        stockChartXValues: [],
        stockChartYValues: []
      }

      
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }

    componentDidMount() {
      this.fetchStock();
    }
    
  
    handleChange(event) {    this.setState({value: event.target.value});  }
  
    handleSubmit(event) {

    alert('data:')
      
      event.preventDefault();
    }

    fetchStock() {
      const pointerToThis = this;
      console.log(pointerToThis);
      const API_KEY = 'RJKPWP2H1TP4NZBL';
      let StockSymbol = 'FB';
      let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
      let stockChartXValuesFunction = [];
      let stockChartYValuesFunction = [];
  
      fetch(API_Call)
        .then(
          function(response) {
            return response.json();
          }
        )
        .then(
          function(data) {
            console.log(data);
  
            for (var key in data['Time Series (Daily)']) {
              stockChartXValuesFunction.push(key);
              stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            }
  
            // console.log(stockChartXValuesFunction);
            pointerToThis.setState({
              stockChartXValues: stockChartXValuesFunction,
              stockChartYValues: stockChartYValuesFunction
            });
          }
        )
    }
    

  
  render() {
    // var found = request('AAPL')

      return(
      <>
      
       <div>
          <div className='NasdaqSL'>
            <label>
              Not sure which exchange a stock is in?
              Check Here!
            </label>
          
              <form onSubmit={this.handleSubmit}>
              <input type='text'value={this.state.value} onChange={this.handleChange} />
              <input type="submit" />  
              </form>
              
          </div>
          <label >
          {this.state.value}
            
          </label>
          <label >
          {/* {found} */}
            
          </label>
          <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />


       </div>
       <Stock/>
      
      </>
          
  
      
      );
  }
}

export default StockScraper

// export default request

// const finnhub = require('finnhub');
// const express = require('express');
// const app = express();

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // use JWT auth to secure the api
// // app.use(jwt());


// // global error handler
// app.use(errorHandler);


// const api_key = finnhub.ApiClient.instance.authentications['api_key'];
// api_key.apiKey = "c9n0ge2ad3ie533i0s70" // Replace this
// const finnhubClient = new finnhub.DefaultApi()

// // Stock candles
// finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
//     console.log(data)
// });


// finnhubClient.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(data)
//     }
// });

// let optsLimit = {'limit': 10};
// finnhubClient.ownership("AAPL", optsLimit, (error, data, response) => {
//     console.log(data)
// });

// //Aggregate Indicator
// finnhubClient.aggregateIndicator("AAPL", "D", (error, data, response) => {
//     console.log(data)
// });

// // Basic financials
// finnhubClient.companyBasicFinancials("AAPL", "margin", (error, data, response) => {
//     console.log(data)
// });

// // Company earnings
// finnhubClient.companyEarnings("AAPL", {'limit': 10}, (error, data, response) => {
//     console.log(data)
// });

// // Company EPS estimates
// finnhubClient.companyEpsEstimates("AAPL", {}, (error, data, response) => {
//     console.log(data)
// });

// // Ebitda Estimates
// finnhubClient.companyEbitdaEstimates("AAPL", {"freq": "annual"}, (error, data, response) => {
//     console.log(data)
// });

// // Ebit Estimates
// finnhubClient.companyEbitEstimates("AAPL", {"freq": "annual"}, (error, data, response) => {
//     console.log(data)
// });

// // Company executive
// finnhubClient.companyExecutive("AAPL", (error, data, response) => {
//     console.log(data)
// });

// // Company peers
// finnhubClient.companyPeers("AAPL", (error, data, response) => {
//     console.log(data)
// });


// // finnhub_client = finnhub.Client(api_key="AIzaSyAIL73LQ9b4YqNQ3LTwIazKiP4OIR7SXOo")

// console.log(finnhubClient.quote('AAPL'))


// module.exports = {result1}
// // pricelist.push(FPromise((request('TSLA'))))
// // console.log(pricelist)
// // module.exports = {pricelist};