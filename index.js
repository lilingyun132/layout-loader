
module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	return content
		.replace(/<!--\s*(require\([^)]+\))\s*-->/g, function(match, match2) {
			return '" + ' + match2 + ' + "';
		});
}
module.exports.seperable = true;