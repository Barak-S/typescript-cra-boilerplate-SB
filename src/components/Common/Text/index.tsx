import { isArray, isNumber } from 'lodash';
import React, { FC } from 'react';
import { ms, MergeStyleVal, px, Style, ClassNameProps } from 'styles';
import { getTestIdProps, TestIdProps } from 'utils';

interface Props extends ClassNameProps, TestIdProps {
  style?: Style | MergeStyleVal[];
  block?: boolean;
  size?: number | string;
  bold?: boolean;
  color?: string;
  content?: string;
}

export const Text: FC<Props> = ({ testID, className, style, size, block, children, color, bold, content }) => {
  const getSizeStyle = (): Style | undefined => {
    if (!size) {
      return undefined;
    }
    if (isNumber(size)) {
      return { fontSize: px(size) };
    }
    return { fontSize: size };
  };

  const finalStyle = ms(
    block && { display: 'block ' },
    getSizeStyle(),
    color ? { color } : undefined,
    bold ? { fontWeight: 'bold' } : undefined,
    isArray(style) ? ms(...style) : style,
  );
  return (
    <span className={className} style={finalStyle} {...getTestIdProps(testID, 'text')}>
      {content || children}
    </span>
  );
};

export default Text;
