import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addUser} from '../actions/userActions'

class NewUser extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      imgae: '',
      description: ''
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) =>{
    e.preventDefault()

    const newUser = {
      title: this.state.title,
      image: this.state.image,
      description: this.state.description
    }

    this.props.addUser(newUser)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="ui main text container segement">
      <div className="ui huge header">New Blog</div>

      <form className="ui form" onSubmit={this.onSubmit}>
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.onChange}/>
        </div>

        <div className="field">
          <label>Image</label>
          <input type="text" name="image" value={this.state.image} placeholder="Image" onChange={this.onChange}/>
        </div>


        <div className="field">
          <label>Description</label>
          <textarea placeholder="Description" value={this.state.description} name="description" onChange={this.onChange}></textarea>
        </div>

        <button className="ui inverted violet big button">Submit</button>
      
      </form>

        
      </div>
    )
  }
}


export default connect(null,{addUser})(NewUser)