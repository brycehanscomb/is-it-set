const isNotSet = require('is-not-set');

module.exports = function(input) {
	return !isNotSet(input);
};