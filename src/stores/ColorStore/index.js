import { types } from 'mobx-state-tree';
import Color from '../../models/Color';

const ColorStore = types
  .model('ColorStore', Color.treeModel)
  .actions(self => {

  });

export default ColorStore;
