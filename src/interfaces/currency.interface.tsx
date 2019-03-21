/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import { INumber } from './number.interface';

export interface ICurrency extends INumber {
    symbol?: string;
    side?: 'left' | 'right';
}
