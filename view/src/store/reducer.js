const initialState={
  isAuthentening: false,
  token: null,
  userData:null
}
const reducer=(state=initialState,action) =>{
  if(action.type === 'LoginClick(e)'){
    //e.preventDefault();
    alert();
  }
  return state;
};
export default reducer;
