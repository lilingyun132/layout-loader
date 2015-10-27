
module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	return content
		.replace(/require\([^)]+\)/g, function(match) {
			return '" + ' + match + ' + "';
		});
}
module.exports.seperable = true;