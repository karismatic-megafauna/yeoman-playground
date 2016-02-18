'use strict';
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var yosay = require('yosay');
// NOTE: fs is wrapped by yeoman

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
      this.toolName = capitalize(answers.toolName).replace(/\s+/g, '');

      this.toolBase = 'src/_shared/tools/' + this.toolName;
      done();
    }.bind(this));
  },

  dirs: function () {
    mkdirp(this.toolBase + '/components');
    mkdirp(this.toolBase + '/redux/ducks');
    mkdirp(this.toolBase + '/redux/ducks/__tests__/');
    mkdirp(this.toolBase + '/redux/selectors');
    mkdirp(this.toolBase + '/redux/selectors/__tests__/');
    mkdirp(this.toolBase + '/redux/dispatch');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(this.toolBase + '/components/index.js'),
      { tool: this.toolName }
    );
    this.fs.copyTpl(
      this.templatePath('ExampleComp.jsx'),
      this.destinationPath(this.toolBase + '/components/' + this.toolName + '.jsx'),
      { tool: this.toolName }
    );
    this.fs.copyTpl(
      this.templatePath('ExampleDuck.js'),
      this.destinationPath(this.toolBase + '/redux/ducks/' + this.toolName + '.js'),
      { tool: this.toolName }
    );
    this.fs.copyTpl(
      this.templatePath('ExampleTestDuck.js'),
      this.destinationPath(this.toolBase + '/redux/ducks/__tests__/' + this.toolName + '-test.js'),
      { tool: this.toolName }
    );
    this.fs.copyTpl(
      this.templatePath('ExampleSelector.js'),
      this.destinationPath(this.toolBase + '/redux/selectors/' + this.toolName + '.js'),
      { tool: this.toolName }
    );
    this.fs.copyTpl(
      this.templatePath('ExampleTestSelector.js'),
      this.destinationPath(this.toolBase + '/redux/selectors/__tests__/' + this.toolName + '-test.js'),
      { tool: this.toolName }
    );
    this.fs.copyTpl(
      this.templatePath('ExampleDispatch.js'),
      this.destinationPath(this.toolBase + '/redux/dispatch/' + this.toolName + '.js'),
      { tool: this.toolName }
    );
  },
});
