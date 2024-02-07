// https://stackoverflow.com/questions/23751914/how-can-i-set-response-header-on-express-js-assets
function setHeader(res, headerName, headerValue) {
    try {
        if (headerName != null && headerValue != null) {
            res.set(headerName, headerValue);
            res.send(`Header set! Name: ${headerName}, Value: ${headerValue}`)
        }
        else {
            res.send('Header name or value not specified.')
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

// https://stackoverflow.com/questions/60476453/how-to-get-request-headers-in-express
function getHeader(res, req, headerName) {
    try {
        const value = req.get(headerName);
        if (value != null) {
            res.send(`Value of the header: ${value}`)
        }
        else {
            res.send('Header not set');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    setHeader,
    getHeader
}