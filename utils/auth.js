import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from '../node_modules/js-cookie'

import axios from "axios";
const apiConfig = require('../api-config');

export const login = ({ token }) => {
    cookie.set('token', token, { expires: 1 })
    Router.push('/index')
};

export const auth = ctx => {
    const { token } = nextCookie(ctx);

    if (ctx.req && !token) {
        ctx.res.writeHead(302, { Location: '/login' });
        ctx.res.end();
        return
    }

    if (!token) {
        Router.push('/login')
    }

    return token
};

export const guest = ctx => {
    const { token } = nextCookie(ctx);

    if (ctx.req && token) {
        ctx.res.writeHead(302, { Location: '/index' });
        ctx.res.end();
        return
    }

    if (token) {
        Router.push('/index');
    }

    return;
};

export const getToken = ctx => {
    const { token } = nextCookie(ctx);

    return token
};

export const getUser = token => {
    const url = apiConfig.serverUrl + '/user/get';
    return axios.post(url, {}, {
        headers:{
            authorization: token
        }})
        .then((response) => {
            return response.data.user;
        })
        .catch(function (error) {
            console.log(error);
        });
};

export const logout = () => {
    cookie.remove('token')
    // to support logging out from all windows
    window.localStorage.setItem('logout', Date.now())
    Router.push('/login')
};