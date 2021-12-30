import { CSSProperties } from 'react';

export type Style = CSSProperties;

export interface Styles {
  [key: string]: Style;
}

export interface StyleProps {
  style?: Style;
}

export interface ClassNameProps {
  className?: string;
}
