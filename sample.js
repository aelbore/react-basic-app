const sass = require('node-sass');
const css = require('css');

const transform = (source) => {
  const res = sass.renderSync({ data: source, outputStyle: 'compressed' });
  const result = res.css.toString('utf8')
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/\t+/gm, '');
  return `module.exports = '${result}'`;
}

module.exports = transform;