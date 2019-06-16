import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import move from 'ember-animated/motions/move';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import layout from '../templates/components/es-notifications';

export default Component.extend({
  layout,

  tagName: '',

  notificationsService: service('es-notifications'),

  notifications: readOnly('notificationsService.notifications'),

  // eslint-disable-next-line require-yield
  *transition({ insertedSprites, keptSprites, removedSprites }) {
    insertedSprites.forEach(fadeIn);
    keptSprites.forEach(move);
    removedSprites.forEach(sprite => {
      const { top, height } = sprite.absoluteInitialBounds;
      sprite.endAtPixel({ y: top - (25 + height) });
      move(sprite);
    });
    removedSprites.forEach(fadeOut);
  },
});

