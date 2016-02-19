'use strict';
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var yosay = require('yosay');
// NOTE: fs is wrapped by yeoman

var ncp = require('ncp').ncp;

ncp.limit = 16;

function capitalize(str) {
  return str.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the superb ' + chalk.red('Procore') + ' generator!'
    ));

    var prompts = [{
      name: 'toolName',
      message: 'What would you like to call your tool?',
    }];

    this.prompt(prompts, function(answers) {
      // this.toolName = capitalize(answers.toolName).replace(/\s+/g, '');
      // TEMPORARY OVERRIDE
      this.toolName = 'counter';

      this.toolBase = 'src/_shared/tools/' + this.toolName;
      done();
    }.bind(this));
  },

  app: function () {
    mkdirp(this.toolBase);
  },

  writing: function () {
    ncp(this.templatePath('redux'), this.destinationPath(this.toolBase), function (err) {
      if (err) {
        return console.error(err);
      }
      console.log('done!');
    });
    ncp(this.templatePath('components'), this.destinationPath(this.toolBase), function (err) {
      if (err) {
        return console.error(err);
      }
      console.log('done!');
    });
  },
});
