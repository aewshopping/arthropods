const markdownIt = require("markdown-it");

module.exports = async function(eleventyConfig) {

	let options = {
		html: true,
    typographer: true,
		quotes: '“”‘’',
	};
  
	eleventyConfig.setLibrary("md", markdownIt(options));
};

module.exports.config = {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };