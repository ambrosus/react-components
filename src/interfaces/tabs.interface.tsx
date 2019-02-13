import { ReactNode } from 'react';

export interface ITabs {
  children?: ReactNode | ReactNode[];
  active?: string;
  light?: boolean;
}
