import ajax from '../services/ajax.js';
import { AUTH_API } from '../constants/auth_api.js';

export const Auth = {
    signin: async(email, pass) => {
        return await ajax.get({
            url: AUTH_API.SIGNIN,
            params: { 'email': email, 'password': pass },
            credentials: 'include',
        });
    },

    signup: async(email, pass) => {
        return await ajax.post({
            url: AUTH_API.SIGNUP,
            body: {
                email: email,
                password: pass,
            },
            credentials: 'include',
        });
    },
};
