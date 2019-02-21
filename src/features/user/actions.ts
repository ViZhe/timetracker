
import { action } from 'typesafe-actions';

import { SET_DATA } from './constants';


interface ISetData {
  name: string;
}

export const setData = (userData: ISetData) => action(SET_DATA, userData);
