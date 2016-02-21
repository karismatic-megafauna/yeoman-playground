'use strict';
// TODO: Add the .yo-rc file to make the root of the project the same!
// TODO: Create .md file that describes the two changes left to make
//      - change 1, edit the bundle.js file and add the counter tool
//      - change 2, find an html.erb file, put a script tag in it with the proper React calls and an html mount point
//      - If they get erros, go to the documentation
// TODO: Print out link to .md file
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
    mkdirp.sync(this.toolBase);
    fse.copySync(this.templatePath('redux'), this.destinationPath(this.toolBase));
    fse.copySync(this.templatePath('components'), this.destinationPath(this.toolBase));
  },

  postInstall: function () {
    this.log('\nCongratulations! The counter component is installed in:');
    this.log(this.destinationPath(this.toolBase));
    this.log('\n-------- NEXT STEPS: --------\n');
    this.log('Follow the instructions on this markdown file:\n');
  },
});
