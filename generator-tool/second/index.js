var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);
    this.option('coffee');
  },
  method1: function() {
    console.log('method 3 just ran');
  },
  method2: function() {
    console.log('method 4 just ran');
  },
});
