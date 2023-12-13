import React from 'react';
import { colors } from 'styles';

import LineAwesomeIcon, { LineAwesomeIconProps as Props } from '.';

export default {
  title: 'components/Icons/LineAwesome',
  component: LineAwesomeIcon,
  args: {
    type: 'skull-crossbones',
  },
  argTypes: {
    color: {
      control: 'color',
      defaultValue: colors.primary,
    },
    size: {
      control: 'range',
      defaultValue: 30,
      min: 0,
      max: 100,
      step: 1,
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <LineAwesomeIcon {...args} />;
