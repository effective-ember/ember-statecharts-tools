import Controller from '@ember/controller';
import { statechart } from 'ember-statecharts/computed';

export default Controller.extend({
  statechart: statechart({
    initial: 'off',

    states: {
      off: {
        on: {
          POWER: 'on'
        }
      },
      on: {
        on: {
          POWER: 'off'
        }
      }
    }
  })
});