import React from 'react';
import PickerStore from '../../stores/PickerStore';

export const storesContext = React.createContext({
  pickerStore: new PickerStore(),
});
