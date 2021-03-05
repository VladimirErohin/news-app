export const ADD_USER = 'ADD_USER';
export const LOGIN_USER = 'LOGIN_USER';

const initialState = {
    users: []
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:                                    //login_user
            return {
                ...state,
                users: [...state.users, action.newUser]
            };

        case LOGIN_USER:
            return {
                ...state,
                users: state.users.map(n => {
                    if (n.password === action.valuePassword) {
                        return {...n, isAuth: true}
                    } else {
                        return n
                    }
                })
            };

        default:
            return state;
    }
};

export const addUserAC = (newUser) => ({type: ADD_USER, newUser});
export const loginUserAC = (valuePassword) => ({type: LOGIN_USER, valuePassword});


