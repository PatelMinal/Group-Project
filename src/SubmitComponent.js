import React, { Component } from 'react';
import './App.css';
import axios, {post} from 'axios';

class SubmitComponent extends Component {
   
    constructor(props) {
	   super(props);
	   this.state = {
		   file: ''
	   }
    }
	
	onChange(e){
		let files=e.target.files;
		let reader=new FileReader();
		reader.readAsDataURL(files[0]);
		
		reader.onload=(e)=>{
			console.warn("file data",e.target.result)
			
		}
	}
	
    render() {
      return (
		<div onSubmit={this.onFormSubmit}>
			<h1>UPLOAD!!!</h1>
			<input type="file" name="file" onChange={(e)=>this.onChange(e)} />
        </div>
       
      )
    }
}

export default SubmitComponent;