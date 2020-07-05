import React, { Component } from 'react';
import { connect } from 'react-redux';
import {list} from "../store/actions/homeAction";
import { Link , withRouter} from 'react-router-dom';
import { compose } from 'redux';

class Home extends Component {
	constructor(props){
	    super(props)
	    this.state = {
	      data:{
	      	first_name: "",
	      	last_name: "",
	      	address: ""
	      }
	    }
  	}

  	submit(){
  		let data = this.state.data;
  		this.props.list(data)
  	}

	handelChange(event){
		let name = event.target.name
		let data = this.state.data
		if(name === "first_name"){
			data["first_name"] = event.target.value
		}
		if(name === "last_name"){
			data["last_name"] = event.target.value			
		}
		if(name === "address"){
			data["address"] = event.target.value
		}
		this.setState({data})
	}


  render() {
  	debugger
    return (
      <div>
        <h1>Home</h1>
      	<input type="text" name="first_name" onChange={this.handelChange.bind(this)} />
      	<input type="text" name="last_name" onChange={this.handelChange.bind(this)} />
      	<input type="text" name="address" onChange={this.handelChange.bind(this)} />
      	<button onClick={this.submit.bind(this)}>Submit</button>
      	{
      		this.props.list && <div>{this.props.list.first_name , this.props.list.last_name , this.props.list.address}</div>
      	}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  	list: state.homeReducer.list
  }
}

export default withRouter(compose(
  connect(mapStateToProps, {
    list
  })
)(Home));
 
