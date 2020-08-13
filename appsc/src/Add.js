import React from 'react';
import './App.css';
import Addexample from './Components/Addexample.js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super()
    this.state={
      books:[]
    }
  }
  componentDidMount(){
    axios.get('http://localhost:3000/books')
      .then(res=>{
        const books=res.data;
       
        this.setState({books});
      
      })
  }
  render(){
  return (
    <div className="App">
  
  {this.state.books.map((disp)=>{return(
    <div key={disp.ISBN} id="main">


   <div className="container" >
     <div className="row"  id="container">
    <div className="card">
    <div className="col-12 col-sm-12" id="card">
            <div  id="flip"className="card-body">
              <h3 className="mt-3">{disp.Title}</h3>
              <p className="text-primary">Author:{disp.Author}</p>
			  <p>ISBN:{disp.ISBN}</p>
			  <p>Date of Publication{disp.PublicationDate}</p>
        <p>Price:{disp.Price}</p>
        <p>Genre:{disp.Genre}</p>
        <p>Format:{disp.Format}</p>
        <button className="btn btn-primary ">Delete</button>
            </div>
          </div>
  </div>
  

  </div>
</div>



  
  </div>
  )
  })
  }



<div className="container">
      <Addexample/>
      </div>
    </div>
  );
}
}
export default App;
