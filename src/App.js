import React, {Component } from 'react';
import Home from './Components/Home/index'


class App extends Component {
  render(){
    return(
      <div>
        <Home/>
      </div>
    )

  }

  
}
export default App
// // App.js
// import React, { Component } from 'react';
// class App extends Component {
//   state = {
//     api: []
//   };
// //    This is where the magic happens
//   async componentDidMount() {
//     try {
//       const res = await fetch('http://127.0.0.1:8000/api/assets'); // fetching the data from api, before the page loaded

//       const api = await res.json();

//       this.setState({
//         api
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <table>
//             <tr><th>#</th><th>Asset</th><th>Location</th><th>Duration</th></tr>
//         {this.state.api.map(item => (
// //          <div key={item.id}>
// //            <h1>{item.asset_name}</h1>
// //            <h1><span>{item.location}</span></h1>
// //            <h1><span>{item.duration}</span></h1>
// //          </div>

//                 <tr>
//                 <td>{item.id}</td>
//                 <td>{item.asset_name}</td>
//                 <td>{item.location}</td>
//                 <td>{item.duration}</td>
//                 <td>{item.process}</td>
//                 </tr>

//         ))}
//         </table>
//       </div>
//     );
//   }
// }

// export default App