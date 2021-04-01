import React, { Component } from 'react'
import img from '../img/RESTFUL Routes.JPG'
import {connect} from 'react-redux'
import {fetchSingleUser,deleteUser,fetchUsers} from '../actions/userActions'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

class SingleUser extends Component {

  componentDidMount(){
    this.props.fetchSingleUser(this.props.match.params.id)
  }

  onClick = (id) =>{
    this.props.deleteUser(id)
    this.props.history.push('/')
    this.props.fetchSingleUser()
  }

  render() {

    const {user} = this.props

    return (

      <div className="ui main text container segment">
      <div className="ui huge header">{user.title}</div>
      <hr></hr>
      <div className="ui top attached">
        <div className="item">
          <img className="ui centered rounded image" src={user.image} alt="hsgdjgs" />
          <div className="content"><span><Moment format="DD/MM/YYYY">{user.date}</Moment></span></div>
          <hr></hr>
          <div className="description">
            <p>{user.description}</p>
          </div>

          <hr></hr>
          <div>

          <Link to={`/users/${user._id}/edit`}><button className="ui inverted orange button">Edit</button></Link>
            <button className="ui inverted red button" onClick={()=> this.onClick(user._id)}>Delete</button>

          </div>
        </div>
      </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.user
})
export default connect(mapStateToProps,{fetchSingleUser,deleteUser,fetchUsers})(SingleUser)