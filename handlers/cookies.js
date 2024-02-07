// https://stackoverflow.com/questions/16209145/how-can-i-set-cookie-in-node-js-using-express-framework

function setCookie(res, cookieName, cookieValue, httpOnlyFlag) {
    try {
        if (cookieName != null && cookieValue != null) {
            let options = { httpOnly: httpOnlyFlag };
            res.cookie(cookieName, cookieValue, options);
            res.send(`Cookie set! Name: ${cookieName}, Value: ${cookieValue}, HttpOnly: ${httpOnlyFlag}`)
        }
        else {
            res.send('Cookie name or value not specified.')
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

function getCookie(res, req, cookieName) {
    try {
        const value = req.cookies[cookieName];
        if (value != null) {
            res.send(`Value of the cookie: ${value}`)
        }
        else {
            res.send('Cookie not set');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    setCookie,
    getCookie
};