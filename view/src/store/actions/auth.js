export const authStart = ()=>{
  return {
    type:'AUTH_START'
  }
};

export const authSuccess = (authData) =>{
  return {
    type:'AUTH_SUCCESS',
    authData:authData
  }
};

export const authFail=(error)=>{
  return {
    type:'AUTH_FAIL',
    error:error
  }
};

export Authenticate=(id,password)=>{
  return dispatch=>{
        dispatch (authStart());
  };
};
