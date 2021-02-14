

export const changeUserName = name => {
  return {
    type: 'CHANGE_USER_NAME',
    payload: name,
  }
}
export const changeLastName = lastName => {
    return {
    type: 'CHANGE_LAST_NAME',
    payload: lastName,
  }
}

export const changePassword = password => {
  return {
    type: 'CHANGE_PASSWORD',
    payload: password,
  }
}
