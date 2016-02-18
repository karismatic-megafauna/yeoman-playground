'use strict';
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var yosay = require('yosay');

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
      'Welcome to the superb '+ chalk.red('Procore') + ' generator!'
    ));

    var prompts = [{
      name: 'toolName',
      message: 'What would you like to call your tool?',
    }];

    this.prompt(prompts, function(answers) {
      this.toolName = capitalize(answers.toolName).replace(/\s+/g, '');

      this.toolBase = 'src/_shared/tools/' + this.toolName;
      done();
    }.bind(this));
  },

  dirs: function () {
    mkdirp(this.toolBase + '/components');
    mkdirp(this.toolBase + '/redux/ducks');
    mkdirp(this.toolBase + '/redux/selectors');
    mkdirp(this.toolBase + '/redux/dispatch');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(this.toolBase + '/components/index.js'),
      { tool: this.toolName }
    );
  },
});
