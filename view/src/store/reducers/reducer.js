import {updateObject} from '../utility'
const initialState={
  isAuthentening: false,
  token: null,
  userData:null,
  userAuths:null,
  error:null,
  authRedirectPath: '/home'
}
const AuthSuccess=(state,action)=>{
//  alert(action.token);
  return updateObject(
    state, {
      isAuthentening:action.isAuthentening,
      token:action.token,
      userData:action.userDetails,
      userAuths:action.userAuths,
      error:null
    }
  );
  
}
const AuthFail=(state,action)=>{
  return updateObject(
    state, { isAuthentening:action.isAuthentening,
      error:action.error
    }
  );
}
const AuthStart=(state,action)=>{
  return updateObject(
    state, { isAuthentening:action.isAuthentening,
      error:action.error,
    }
  );
}
const authLogout = (state, action) => {
  return updateObject(state, { token: null, userData: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path })
}

const reducer=(state=initialState,action) =>{
    switch(action.type){
      case 'AUTH_START' : return AuthStart(state,action);
      case 'AUTH_SUCCESS' : return AuthSuccess(state,action);
      case 'AUTH_FAIL' : return AuthFail(state,action);
      case 'Logout': return authLogout(state, action);
      case 'SET_AUTH_REDIRECT_PATH': return setAuthRedirectPath(state,action);
      default:
            return state;
    }
 
};
export default reducer;
