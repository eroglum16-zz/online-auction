const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    /* config options here */
    env: {
        API: process.env.API
    }
});