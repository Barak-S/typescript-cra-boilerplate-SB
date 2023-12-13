import { View } from 'components/Common';
import React from 'react';

import TextButton, { TextButtonProps as Props } from '.';

export default {
  title: 'components/Buttons/Text',
  component: TextButton,
  args: {
    children: 'Text button',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => (
  <View column>
    <TextButton {...args} />
    <TextButton {...args} disabled />
  </View>
);
