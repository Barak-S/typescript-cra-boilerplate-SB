import React from 'react';

import RoundedIconButton, { RoundedIconButtonProps as Props } from '.';

export default {
  title: 'components/Buttons/RoundedIcon',
  component: RoundedIconButton,
  args: {
    icon: 'times',
  },
  argTypes: {
    onClick: { action: 'onClick' },
  },
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <RoundedIconButton {...args} />;

export const Disabled = (args: any) => <RoundedIconButton {...args} disabled />;

Disabled.parameters = {
  docs: {
    storyDescription: 'Unactive state',
  },
};
