
var loaderUtils = require("loader-utils");

module.exports = function(content) {
	this.cacheable && this.cacheable();
	
	var query = loaderUtils.parseQuery(this.query);


	// before html loader
	if (query.r) {
		return content
			.replace(/<!(--\s*require\([^)]+\)\s*--)>/g, function(match, match2) {
				return match2;
			});		
	}

	// after html loader
	if (query.l) {
		return content
			.replace(/--\s*(require\([^)]+\))\s*--/g, function(match, match2) {
				return '" + ' + match2 + ' + "';
			});		
	}

	// when html loader minize option is false
	return content
		.replace(/<!--\s*(require\([^)]+\))\s*-->/g, function(match, match2) {
			return '" + ' + match2 + ' + "';
		});
}
module.exports.seperable = true;