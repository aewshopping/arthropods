const markdownIt = require("markdown-it");

module.exports = async function(eleventyConfig) {

	let options = {
		html: true,
	};
  
	eleventyConfig.setLibrary("md", markdownIt(options));
  eleventyConfig.addPassthroughCopy("public");

  const { HtmlBasePlugin } = await import("@11ty/eleventy");
  eleventyConfig.addPlugin(HtmlBasePlugin);
};

module.exports.config = {
    pathPrefix: "/arthropods/",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };