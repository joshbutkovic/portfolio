const withCSS = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withCSS(withImages());
