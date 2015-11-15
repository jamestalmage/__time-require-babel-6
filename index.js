require('time-require');

var babel = require('babel-core');

babel.transformFileSync('./fixture.js', {presets: ['stage-3', 'es2015']});