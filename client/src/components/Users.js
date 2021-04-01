import React, { Component } from 'react'
import img from '../img/RESTFUL Routes.JPG'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/userActions'
import Moment from 'react-moment'

class Users extends Component {


  componentDidMount(){
    this.props.fetchUsers();
  }
 

  render() {

    const {users} = this.props
    let userData


    if(users.length === 0){
      return (<div className="ui active dimmer">
          <div className="ui large text loader">Loader</div>
      </div>)
    }else{
      userData = users.map(user => (
        <div className="item" key={user._id}>
        <div className="image">
          <img src={user.image} alt="user pic" />
        </div>
        <div className="content">
        <a className="header">{user.title}</a>
         <div className="meta">
        <span><Moment format="DD/MM/YYYY">{user.date}</Moment></span>
        </div>
        <div className="description">
          <p>{user.description}</p>
        </div>
        <div className="extra">
          <Link to={`/users/${user._id}`} className="ui floated basic violet button">Read More <i className="right chevron icon"></i></Link>
        </div>
        </div>
       </div>
      ))
    }

    return (
      <div className="ui main text container">
        <div className="ui huge header">BLOG SITE</div>
        <div className="ui top attached segment">
          <div className="ui divided items">
            {userData}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users.users
})

export default connect(mapStateToProps,{fetchUsers})(Users)