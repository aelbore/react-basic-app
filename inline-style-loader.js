const sass = require('node-sass');
const path = require('path');
const fs = require('fs');
const chokidar = require('chokidar');

const babel = require('babel-core');

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

const getContent = (styleUrl, urlResolver) => {
  const styleFile = urlResolver(styleUrl);
  const originContent = fs.readFileSync(styleFile, 'utf8');
  const styleContent = buildSass(originContent, styleFile);
  return styleContent
    .replace(/([\n\r]\s*)+/gm, ' ')
    .replace(/"/g, '\\"');
};

const trasform = function(source) {
  if (this.cacheable) this.cacheable();

  const urlResolver = (url) => path.join(path.dirname(this.resourcePath), url);
  source = source.replace(/inlineStyles\s*:\s*(\[[\s\S]*?\])/gm, function(m, styleUrls) {
    const urls = eval(styleUrls);
    return 'inlineStyles: ['
      + urls.map(styleUrl => `"${ getContent(styleUrl, urlResolver) }"`)
          .join(',\n')
          .replace('\n', ' ')
      + ']';
  });

  return source;
}

module.exports = trasform;