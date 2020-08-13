import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';


class Navbar extends React.Component{
  constructor(props){
    super()
    this.state={
      books:[
        
      ],
    search:'',
    Value:''
    }

  }



  componentDidMount(){
    console.log(this.state.Value);
    axios.get('http://localhost:3000/Store234'+'/'+this.state.Value)
    .then(res=>{
      const books=res.data;
     
      this.setState({books});
    
    })
  }






  handleSearchChange=event=>{
    this.setState({Value:event.target.value,
       
   });
  
}




handleSubmit(){
  this.componentDidMount()
}
  render(){


  return(
    <div >
    <nav id="nav" className="navbar navbar-expand-md navbar-dark">
    <div className="container">
  <a id="head"className="navbar-brand" href="#"><h3>Book Inventory</h3></a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="#navbar" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbar">
  <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={this.handleSubmit}>
      <input className="form-control mr-sm-2" type="search" value={this.state.value}  aria-label="Search" onChange={this.handleSearchChange}/>
      <button id="search"className="btn btn-danger my-2 my-sm-0" type="submit"><a id="searcha"className="nav-link" href="/Search">Search</a></button>
    </form>
    <ul id="ul"className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/add">Add</a>
      </li>
     
    </ul>
      
    </div>
    </div>
   
    </nav>
        
    
    
    <div>
      

{this.state.books.map((disp)=>{
  if(this.state.Value==disp.Title){
   
    return(
    
<div key={disp.ISBN} id="main">
<div className="container" >
<div className="row"  id="container">
<div id="inner" className="card">
<div className="col-12 col-sm-12" id="card">
<div  id="flip"className="card-body">
<h3 className="mt-3">{disp.Title}</h3>
<p className="text-primary">Author:{disp.Author}</p>
<p>ISBN:{disp.ISBN}</p>
<p>Date of Publication:{disp.PublicationDate}</p>
<p>Publisher:{disp.Publisher}</p>
<p>Price:{disp.Price}</p>
<p>Genre:{disp.Genre}</p>
<p>Format:{disp.Format}</p>


</div>
</div>
</div>
</div>
</div>
<br id="line"/>

</div>

)
    }  
     if(this.state.Value==disp.Author) {
      return(
    
        <div key={disp.ISBN} id="main">
        <div className="container" >
        <div className="row"  id="container">
        <div id="inner" className="card">
        <div className="col-12 col-sm-12" id="card">
        <div  id="flip"className="card-body">
        <h3 className="mt-3">{disp.Title}</h3>
        <p className="text-primary">Author:{disp.Author}</p>
        <p>ISBN:{disp.ISBN}</p>
        <p>Date of Publication:{disp.PublicationDate}</p>
        <p>Publisher:{disp.Publisher}</p>
        <p>Price:{disp.Price}</p>
        <p>Genre:{disp.Genre}</p>
        <p>Format:{disp.Format}</p>
        
        
        </div>
        </div>
        </div>
        </div>
        </div>
        <br id="line"/>
        
        </div>
        
        )
    }
    if(this.state.Value==disp.Publisher) {
      return(
    
        <div key={disp.ISBN} id="main">
        <div className="container" >
        <div className="row"  id="container">
        <div id="inner" className="card">
        <div className="col-12 col-sm-12" id="card">
        <div  id="flip"className="card-body">
        <h3 className="mt-3">{disp.Title}</h3>
        <p className="text-primary">Author:{disp.Author}</p>
        <p>ISBN:{disp.ISBN}</p>
        <p>Date of Publication:{disp.PublicationDate}</p>
        <p>Publisher:{disp.Publisher}</p>
        <p>Price:{disp.Price}</p>
        <p>Genre:{disp.Genre}</p>
        <p>Format:{disp.Format}</p>
        
        
        </div>
        </div>
        </div>
        </div>
        </div>
        <br id="line"/>
        
        </div>
        
        )
    }
})
}

</div>
    


    </div>
  )
}
}


export default Navbar;
