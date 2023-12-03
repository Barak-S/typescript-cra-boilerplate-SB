import { LineAwesomeIcon } from 'components/Icons'
import React, { FC } from 'react'
import { colors, ms, StyleProps, Styles } from 'styles'

interface Props extends StyleProps {
  expanded?: boolean;
  hovered?: boolean;
}

export const NavigationAccordionIcon: FC<Props> = ({ style, expanded, hovered }) => {
  const color = expanded ? colors.primary : colors.textGray
  let transform: string = 'rotate(0deg)'
  if (hovered || expanded) {
    transform = 'rotate(90deg)'
  }
  return <LineAwesomeIcon type="chevron-circle-right" style={ms(styles.container, { color, transform }, style)} />
}

const styles: Styles = {
  container: {
    transition: 'all .2s ease-in',
  }
}

export type NavigationAccordionIconProps = Props
export default NavigationAccordionIcon
