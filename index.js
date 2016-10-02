const path = require('path');
const package = require('./package.json');

const entryPoint = require.resolve(package.name);
const distPath = path.dirname(entryPoint);

module.exports = {
    includePath: distPath
};
