const initialState={
  isAuthentening: false,
  token: null,
  userData:null,
  userAuth:null,
  error:null,
}
const reducer=(state=initialState,action) =>{
    switch (action.type)
    case 'AUTH_SUCCESS':
        return{}
  return state;
};
export default reducer;
