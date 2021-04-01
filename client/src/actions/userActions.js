import axios from 'axios'
import { FETCH_USERS, SINGLE_USER,ADD_USERS,UPDATE_USER,DELETE_USER } from './types';


export const fetchUsers = () => dispatch => {
  console.log('actions')
  axios.get('/api/users')
      .then(res => dispatch({
        type: FETCH_USERS,
        payload: res.data
      }))
}

export const fetchSingleUser = id => dispatch => {
  console.log('actions')
  axios.get(`/api/users/${id}`)
      .then(res => dispatch({
        type: SINGLE_USER,
        payload: res.data
      }))
}


export const addUser = newUser => dispatch => {
  console.log('actions')
  axios.post('/api/users',newUser)
      .then(res => dispatch({
        type: ADD_USERS,
        payload: res.data
      }))
}


export const editUser = (id,newUser) => dispatch => {
  console.log('actions')
  axios.put(`/api/users/${id}`,newUser)
      .then(res => dispatch({
        type: UPDATE_USER,
        payload: res.data
      }))
}

export const deleteUser = id => dispatch => {
  console.log('actions')
  axios.delete(`/api/users/${id}`)
      .then(res => dispatch({
        type: DELETE_USER,
        payload: id
      }))
}



