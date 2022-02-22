const initialState = { user: null, token: null};

const reducer = (state = initialState, action) => {
    const {type,payload} = action;
    switch(type){
        case 'LOGIN_SUCCESS': {
            const newState = { ...state };
            newState.user = payload.user;
            newState.token = payload.token;
            return newState;
        }
        case 'LOGIN_FAILED': {
            const newState = { ...state };
            // console.log('login failed', payload.error);
            // alert(payload.error);
            return newState;
        }
        case 'UPDATE_SUCCESS': {
            const newState = { ...state };
            newState.user = {...payload.user1};
            // newState.token = payload.token1;
            return newState;
        }
        case 'UPDATE_FAILED': {
            const newState = { ...state };
            // console.log('login failed', payload.error);
            // alert(payload.error);
            return newState;
        }
        case 'LOGOUT':
            return state=initialState;
        
        default:
            const newState = { ...state };
            return state=newState;
    }
}
export default reducer;