const { setHeader, getHeader } = require('../handlers/headers');

function setHeaders(req, res) {
	const name = req.query.name;
	const value = req.query.value;

	setHeader(res, name, value);
}

function getHeaders(req, res) {
	const name = req.params.name;
	getHeader(res, req, name);
}


module.exports = {
	setHeaders,
	getHeaders
}
