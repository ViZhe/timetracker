
import { action } from 'typesafe-actions';

import { ADD } from './constants';
import { ITimesData } from './models';


export const add = (timeEntry: ITimesData) => action(ADD, timeEntry);
