import { ReactNode } from 'react';

export interface ITabs {
  children?: ReactNode[];
  active?: string;
  light?: boolean;
}
