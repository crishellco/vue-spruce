const { parseComponent } = require('vue-sfc-parser');
const { parse } = require('node-html-parser');
const { html } = require('js-beautify');
const fs = require('fs');
const glob = require('glob');

const files = glob.sync(process.cwd() + '/src/**/demo/components/*.vue');

files.forEach(file => {
  const sfc = fs.readFileSync(file, 'utf8');

  const res = parseComponent(sfc);
  const template = res.template;
  const root = parse(template.content).querySelector('demo-section');
  const newName = file.substr(0, file.lastIndexOf('.')) + '.gist';

  fs.writeFileSync(
    newName,
    html(root.innerHTML, {
      indent_size: 2,
      wrap_line_length: 60,
      max_preserve_newlines: 2,
    })
  );
});
