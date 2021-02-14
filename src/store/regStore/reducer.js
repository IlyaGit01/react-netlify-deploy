
const initialState = {
  name: 'Masha',
  lastName: '',
  password: '',
};

export const authReducer = ( state= initialState, action) => {

  if(action.type === 'CHANGE_NAME')
    return {...state, name: action.payload }

  if(action.type === 'CHANGE_LAST_NAME')
    return {...state, lastName: action.payload }

  if(action.type === 'CHANGE_PASSWORD')
    return {...state, password: action.payload }

  return state
}
