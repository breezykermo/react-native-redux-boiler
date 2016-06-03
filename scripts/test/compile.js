/* eslint-disable */
var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var origJs = require.extensions['.js'];

var cwd = process.cwd();
var fileNameRel, src, output;
var mockDir = path.join(__dirname, 'mocks');

// use babel for this node-modules
var nodeModulesBabel = [
  // add modules here
];

require.extensions['.js'] = function (module, fileName) {
  output = null;
  // react native is mocked by react-native-mock
  //if (fileName.indexOf('node_modules/react-native/Libraries/react-native/react-native.js') >= 0) {
  //  fileName = path.resolve('./test/mocks/react-native.js');
  //}

  // strip off current working dir from path
  fileNameRel = fileName.replace(cwd + path.sep, '');

  // mock all requires of image-files
  if(fileName.search(/.*\.(png|jpg)$/gi) > -1) {
    return '';
  }

  // check if mock exists for file
  var mockFile = path.join(mockDir, fileNameRel);

  if(fs.existsSync(mockFile)) {
    src = fs.readFileSync(mockFile, 'utf8');
    output = babel.transform(src, {
      filename: fileName
    }).code;

    return module._compile(output, fileName);
  }

  // use nodemodules directly without babel
  if (fileName.search(/node_modules\//g) > -1) {
    // check if the nodemodule should explicit be compiled with babel
    var match = fileName.match(/node_modules\/([^\/]*)\//);

    if(!(match && match[1] && nodeModulesBabel.indexOf(match[1]) > -1)) {
      return (origJs || require.extensions['.js'])(module, fileName);
    }
  }

  // compile with babel
  src = fs.readFileSync(fileName, 'utf8');
  output = babel.transform(src, {
    filename: fileName
  }).code;

  return module._compile(output, fileName);
};
/* eslint-enable */
