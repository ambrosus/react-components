/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.io
 */
import { ReactNode } from 'react';

export interface ITabs {
  children?: ReactNode | ReactNode[];
  active?: number;
  light?: boolean;
}
