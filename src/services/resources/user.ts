import api from '../api';

export interface signInData{
    email: string;
    password: string;
}

export interface signUpData{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const signIn = async(data: signInData) => {
    return api.post('/user/signin', data);
}

export const me = async() => {
    return api.get('/user/signup');
}

export const signUp = async(data: signUpData) => {
    return api.post('/user/signup', data);
}