import { isArray } from 'lodash';
import React, { FC, LegacyRef, MouseEvent, ReactNode, Ref, RefObject } from 'react';
import { ms, MergeStyleVal, Style, Styles } from 'styles';

interface Props {
  divRef?: Ref<HTMLDivElement> | RefObject<HTMLDivElement> | LegacyRef<HTMLDivElement>;
  id?: string;
  style?: Style | MergeStyleVal[];
  children?: ReactNode;
  className?: string;
  row?: boolean;
  flex?: string;
  column?: boolean;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justifyContent?: 'flex-start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-end';
  alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'self-start' | 'self-end';
  cursor?: 'pointer';
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  onMouseEnter?: (e: MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLElement>) => void;
  onMouseMove?: (e: MouseEvent<HTMLElement>) => void;
}

export const View: FC<Props> = ({
  className,
  style,
  id,
  children,
  row,
  column,
  flex,
  direction,
  justifyContent,
  alignItems,
  cursor,
  onClick,
  divRef,
  onMouseEnter,
  onMouseLeave,
  onMouseMove,
}) => {
  const cStyle = ms(
    styles.container,
    flex ? { flex } : null,
    row ? { flexDirection: 'row' } : null,
    column ? { flexDirection: 'column' } : null,
    direction ? { flexDirection: direction } : null,
    justifyContent ? { justifyContent } : null,
    alignItems ? { alignItems } : null,
    cursor ? { cursor } : null,
    isArray(style) ? ms(...style) : style,
  );
  return (
    <div
      ref={divRef}
      id={id}
      className={className}
      style={cStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
    >
      {children}
    </div>
  );
};

const styles: Styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
};

export default View;
