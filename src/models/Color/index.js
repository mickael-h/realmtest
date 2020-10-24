import { types } from 'mobx-state-tree';

const HEXA = 16;

export default class Color {
  toString = () =>
    this.name ??
    this.shortHand ??
    `#${this.r?.toString(HEXA)}${this.g?.toString(HEXA)}` +
    `${this.b?.toString(HEXA)}${this.a?.toString(HEXA)}`;
}

Color.schema = {
  name: 'Color',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string?',
    shortHand: 'string?',
    r: 'int',
    g: 'int',
    b: 'int',
    a: 'int',
  },
};

Color.treeModel = {
  id: types.identifierNumber,
  name: types.maybeNull(types.string),
  shortHand: types.maybeNull(types.string),
  r: types.integer,
  g: types.integer,
  b: types.integer,
  a: types.integer,
};
