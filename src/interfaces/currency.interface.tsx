/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import { INumber } from './number.interface';

export interface ICurrency extends INumber {
    symbol?: string;
    side?: 'left' | 'right';
}
