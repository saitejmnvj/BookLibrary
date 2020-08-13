import React from 'react';
import axios from 'axios';
import Update from './Update.js';
import ReactDOM from 'react-dom';
import Navbar from './Navigation'


class Display extends React.Component {
    constructor(props){
      super()
      this.state={
        books:[
          
        ]
      }
    }
 
    componentDidMount(){
        axios.get('http://localhost:3000/Store234')
          .then(res=>{
            const books=res.data;
           
            this.setState({books});
          
          })
      }
     delbooks(id){
        axios.delete('http://localhost:3000/Store234/' +id)
        .then(res=>{
            console.log("This id has been deleted"+id);
            alert("The book with id:"+id+"Has been deleted");
            //this.reload();
              return(
                axios.get('http://localhost:3000/Store234')
              .then(res=>{
              const books=res.data;
              this.setState({books});
        
        })  
              )
          })
      }
     /* reload(){
        axios.get('http://localhost:3000/Store234')
        .then(res=>{
          const books=res.data;
         
          this.setState({books});
        
        })
      }*/
      /*delbooks(id){
         return(
             <Delbooks id={id}/>
         )
         
             
          
      }*/
      upd(id){
  
          return(
            ReactDOM.render(<Update id={id}/>, document.getElementById('root1'))
            
            
          )
       
      }
    
   
      
      render(){
        const update=()=>{
          return(<Update/>)
        }
          return(
            
              <div>
                
                  <Navbar/>
                  {this.state.books.map((disp)=>{
                      //if(disp.Title=="Sins of Father")
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
                  <button id="update"onClick={this.upd.bind(this,disp.id)} className="btn mr-2"><a id="updatea"href="#root1">Update</a></button>
                  <button id="delete"onClick={this.delbooks.bind(this,disp.id)}  className="btn">Delete</button>
                  
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  <br id="line"/>

                  </div>
  )
                      
  })
  }
 
              </div>
          )
      }




}

export default Display;