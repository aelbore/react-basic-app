const sass = require('node-sass');
const loaderUtils = require('loader-utils');

const buildSass = (content, sourceFile) => {
  try {
    return sourceFile.endsWith('.scss') ? 
      sass.renderSync({ data: content, file: sourceFile, outputStyle: 'compressed' })
        .css.toString() : content;
  } catch (e) {
    console.error('\x1b[41m');
    console.error('at ' + sourceFile + ':' + e.line + ":" + e.column);
    console.error(e.formatted);
    console.error('\x1b[0m');
    return "";
  }
};

const transform = function(source) {
  const content = buildSass(source, this.resourcePath);
  return `module.exports = ${loaderUtils.stringifyRequest(this, content)}`;
}

module.exports = transform;