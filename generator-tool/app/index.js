'use strict';
// TODO: add the .yo-rc file to make the root of the project the same!
// TODO: move all of the commetns to another generator and keep this one clean

var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var yosay = require('yosay');
var fse = require('fs-extra');
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

    // NOTE: commenting out for V1, will add this back for v2
    var prompts = [{
      type: 'confirm',
      name: 'toolName',
      message: 'Would you like to make a counter React / Redux sample application?',
      default: true,
    }];

    this.prompt(prompts, function(answers) {
      // this.toolName = capitalize(answers.toolName).replace(/\s+/g, '');
      // TEMPORARY OVERRIDE
      this.toolName = 'counter';

      this.toolBase = 'src/_shared/tools/' + this.toolName;
      done();
    }.bind(this));
  },

  writing: function () {
    mkdirp(this.toolBase);
    fse.copySync(this.templatePath('redux'), this.destinationPath(this.toolBase));
    fse.copySync(this.templatePath('components'), this.destinationPath(this.toolBase));
  },
});
