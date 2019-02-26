
import { action } from 'typesafe-actions';

import { ADD, REMOVE } from './constants';
import { ITimesData } from './models';


export const add = (timeEntry: ITimesData) => action(ADD, timeEntry);
export const remove = (keys: string[]) => action(REMOVE, keys);
