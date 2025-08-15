const markdownIt = require("markdown-it");

module.exports = async function(eleventyConfig) {

	let options = {
		html: true,
	};
  
	eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addPassthroughCopy("public");
};

module.exports.config = {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };