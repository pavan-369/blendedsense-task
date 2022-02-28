export const login = (data) => {
  return {type:'LOGIN', 
  payload:data,
}};
export const refresh= (data) => {
  return {type:'REFRESH', 
  payload:data,
}};
export const logout = () => {
    return {type:'LOGOUT'
}};
export const update = (data) => {
  return {type:'UPDATE', 
  payload:data,
}};
export const reset = (data) => {
  return {type:'RESET', 
  payload:data,
}};