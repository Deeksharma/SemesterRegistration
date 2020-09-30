import axios from 'axios'
import { API } from '../../config';
import { sessionService } from 'redux-react-session';
import { useCookies } from 'react-cookie';
import Session from 'react-session-api'
export const AuthStart = () => {
    return {
        type: 'AUTH_START'
    };
};

export const AuthSuccess = (isAuthentening, token, userDetails, userAuths) => {
    return {
        type: 'AUTH_SUCCESS',
        isAuthentening: isAuthentening,
        token: token,
        userDetails: userDetails,
        userAuths: userAuths
    };
};


export const AuthFail = (error) => {
    return {
        type: 'AUTH_FAIL',
        error: error
    };
};
export const setAuthRedirectPath = (path) => {
    return {
        type: 'SET_AUTH_REDIRECT_PATH',
        path: path
    };
};
export const Authenticate = (id, password, props) => {
    //const { cookies } = useCookies();
    return dispatch => {
        dispatch(AuthStart());

        axios({
                method: 'post',
                url: `${API}/signin`,
                //  timeout: 4000,    // 4 seconds timeout
                headers: {
                    Accepts: 'application/json',
                    "Content-Type": "application/json"
                },
                data: {
                    username: id,
                    password: password,
                }
            })
            .then(response => {

                //console.log(response.data);
                // console.log(response.data.data.getUserAuths);
                if (response.data.status === true) { //alert();
                    Session.set("token", response.data.token);
                    const expirationDate = new Date(new Date().getTime() + 6000 * 1000);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('isAuthentening', response.data.status);

                    localStorage.setItem('UserDetails', JSON.stringify(response.data.userDetails));
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('UserAuths', JSON.stringify(response.data.userauths));

                    dispatch(AuthSuccess(response.data.status, response.data.token, response.data.userDetails, response.data.userauths));
                    //  dispatch(checkAuthTimeout(response.data.expiresIn));

                } else {
                    dispatch(AuthFail('Invalid Username or Password.'))
                }

            }).catch(error => //console.error(error),
                dispatch(AuthFail(error))
                // this.setState({status:false,error:'Something went wrong',showMsg:true})

            )
    };
};
export const logout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('UserDetails');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('UserAuths');
    localStorage.removeItem('isAuthenticated');
    return {
        type: 'Logout'
    };
};

export const checkAuthTimeout = (expirationTime) => {

    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};
export const authCheckState = () => {
    const { cookies } = this.props;
    return dispatch => {
        const token = cookies.get('token');
        if (!token) {

            dispatch(logout());
        } else {

            const expirationDate = new Date(cookies.get('expirationDate'));
            if (expirationDate <= new Date()) {

                dispatch(logout());
            } else {
                const token = cookies.get('token');
                const UserDetails = cookies.get('UserDetails');
                const UserAuths = cookies.get('UserAuths');
                const isAuthentening = cookies.get('isAuthenticated');
                dispatch(AuthSuccess(isAuthentening, token, UserDetails, UserAuths));
                //dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    };
};