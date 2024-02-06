const { setCookie, getCookie } = require('../handlers/cookies');

// example: http://localhost:3400/cookies/set?name=Cookie1&value=Cookievalue1
//  http://localhost:3400/cookies/set?name=Cookie2&value=Cookievalue2&http_only=true
function setCookies(req, res) {
    const name = req.query.name;
    const value = req.query.value;
    const http_only = req.query.http_only === 'true' ? true : false;

    setCookie(res, name, value, http_only);
}


// example: http://localhost:3400/cookies/get/Cookie1
function getCookies(req, res) {
    const name = req.params.name;
    getCookie(res, req, name);
}

module.exports = {
    setCookies,
    getCookies
}