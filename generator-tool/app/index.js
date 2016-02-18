'use strict';
var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var yosay = require('yosay');

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

    this.prompt(prompts, function(props) {

      this.props = props;

      done();
    }.bind(this));
  },

  app: function () {
    mkdirp('src/_shared/tools/' + this.props.toolName + '/components');
    mkdirp('src/_shared/tools/' + this.props.toolName + '/redux/ducks');
    mkdirp('src/_shared/tools/' + this.props.toolName + '/redux/selectors');
    mkdirp('src/_shared/tools/' + this.props.toolName + '/redux/dispatch');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt'),
      { title: this.props.toolName }
    );
  },
});
