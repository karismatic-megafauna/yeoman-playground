'use strict';
var generators = require('yeoman-generator');
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

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt'),
      { title: this.props.toolName }
    );
  },
});
