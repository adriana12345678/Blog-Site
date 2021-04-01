import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editUser} from '../actions/userActions'
class EditUser extends Component {

  constructor(props){
    super(props)
    const {user} = this.props
    this.state = {
      title: user.title,
      image: user.image,
      description: user.description
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

    this.props.editUser(this.props.match.params.id,newUser)
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="ui main text container segement">
      <div className="ui huge header">Edit Blog</div>

      <form className="ui form" onSubmit={this.onSubmit}>
        <div className="field">
          <label>Title</label>
          <input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title"/>
        </div>

        <div className="field">
          <label>Image</label>
          <input type="text" name="image" value={this.state.image} onChange={this.onChange} placeholder="Image"/>
        </div>


        <div className="field">
          <label>Description</label>
          <textarea placeholder="Description" value={this.state.description} onChange={this.onChange} name="description"></textarea>
        </div>

        <button className="ui inverted violet big button">Update</button>
      
      </form>

        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.user
})
export default connect(mapStateToProps,{editUser})(EditUser)