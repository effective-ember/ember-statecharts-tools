'use strict';

module.exports = {
  name: require('./package').name,

  options: {
    autoImport: {
      exclude: ['ember-statecharts']
    }
  },

  included() {
    this._super.included.apply(this, arguments);

    // for drawing svg arrows
    this.import('node_modules/leader-line/leader-line.min.js');
  }
};
