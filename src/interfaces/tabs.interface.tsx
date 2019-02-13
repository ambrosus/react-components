import { ReactNode } from 'react';

export interface ITabs {
  children?: ReactNode | ReactNode[];
  active?: number;
  light?: boolean;
}
