import {FETCH_USERS, SINGLE_USER, ADD_USERS, DELETE_USER} from '../actions/types'

const initialState = {
  users: [],
  user: {}
}


export default (state = initialState ,action) => {
  console.log('reducers')
  switch(action.type){

    case FETCH_USERS:
      return{
        ...state,
        users: action.payload
      }

    case SINGLE_USER:
      return{
        ...state,
        user: action.payload
      }
    case ADD_USERS:
      return{
        ...state,
        user: action.payload
      }

    case DELETE_USER:
     return{
       ...state,
       user: state.users.filter(user => user._id !== action.payload)
     }
    
    default:
      return state

  }

}