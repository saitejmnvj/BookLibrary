import React from 'react';
import axios from 'axios';
import Navbar from './Navigation'

 class Addexample extends React.Component{
constructor(props){
    super()
    this.state={
        Store234:{ 
        Title:'',     
        Author:'',
        ISBN:'',
        PublicationDate:'',
        Publisher:'',
        Price:'',
        Genre:'',
        Format:'',

    }
  
    }
}

handleChange=event=>{
     this.setState({Author:event.target.value,
        
    });
}
handleChange1=event=>{
    this.setState({ISBN:event.target.value,
       
   });
}
handleTitleChange=event=>{
    this.setState({Title:event.target.value,
       
   });
}
handlePublicationDateChange=event=>{
    this.setState({PublicationDate:event.target.value,
       
   });
}
handlePublisherChange=event=>{
    this.setState({Publisher:event.target.value,
       
   });
}
handlePriceChange=event=>{
    this.setState({Price:event.target.value,
       
   });
}
handleGenreChange=event=>{
    this.setState({Genre:event.target.value,
       
   });
}
handleFormatChange=event=>{
    this.setState({Format:event.target.value,
       
   });
}



 handleSubmit=event =>{
    event.preventDefault();
    this.state.Store234={
        Title:this.state.Title,
        Author:this.state.Author,
        ISBN:this.state.ISBN,
        PublicationDate:this.state.PublicationDate,
        Publisher:this.state.Publisher,
        Price:this.state.Price,
        Genre:this.state.Genre,
        Format:this.state.Format
    };

axios.post('http://localhost:3000/Store234',this.state.Store234)
      .then(res=>{
          console.log(res);
          console.log(res.data);
         
         alert("The details have been added");
      })
     /* .catch(function(error){
          console.log('error');
      })*/
 
};

render(){
    return(
        <div >

            <Navbar/>
            <div className="container">
        <div id="form2" >
        <form className="mt-3" onSubmit={this.handleSubmit}>
           
            <div className="form-group row"> 
            <label for="firstname" className="col-md-4 col-form-label">Enter the Title:</label>
            <div  className="col-md-6"> 
            <input  type="text" name="Title" value={this.Title} onChange={this.handleTitleChange}/> 
            </div>
            </div>
            <div className="form-group row"> 
            <label for="firstname" className="col-md-4 col-form-label">Enter Authors Name:</label>
            <div className="col-md-6"> 
            <input type="text"  name="Author" value={this.Author} onChange={this.handleChange}/>
            </div>
            </div>
            <div className="form-group row"> 
            <label for="firstname" className="col-md-4 col-form-label">
            Enter ISBN:</label>
            <div className="col-md-6"> 
            <input type="text"  name="ISBN" value={this.ISBN} onChange={this.handleChange1}/>
            </div>
            </div>
            <div className="form-group row"> 
            <label for="firstname" className="col-md-4 col-form-label">
            Enter Publication Date:</label>
            <div className="col-md-6">
            <input type="date"  name="PublicationDate" value={this.PublicationDate} onChange={this.handlePublicationDateChange}/>
            </div>
            </div>
            <div className="form-group row"> 
            <label for="firstname" className="col-md-4 col-form-label">
            Enter the Publisher Name:</label>
            <div className="col-md-6">
            <input type="text"  name="Publisher" value={this.Publisher} onChange={this.handlePublisherChange}/>
            </div>
            </div>
            <div className="form-group row"> 
            <label for="firstname" className="col-md-4 col-form-label">
            Enter the Cost of the Book:</label>
            <div className="col-md-6">
            <input type="text"  name="Price" value={this.Price} onChange={this.handlePriceChange}/>
            </div>
            </div>
            <div className="form-group row"> 
            <label for="firstname" className="col-md-4 col-form-label">
            Enter the Genre:</label>
            <div className="col-md-6">
            <input type="text"  name="Genre" value={this.Genre} onChange={this.handleGenreChange}/>
            </div>
            </div>
            <div className="form-group row"> 
            <label for="firstname" className="col-md-4 col-form-label">
            Enter the book Format:</label>
            <div className="col-md-6">
            <input type="text"  name="Format" value={this.Format} onChange={this.handleFormatChange}/>
            </div>
            </div>
            <br/><br/>
            <button id="addbutton" className="btn btn-danger" type="submit">Enter the Details</button>

          
        </form>
           
        </div>
        </div>
        </div>
    )
}
}

export default Addexample;