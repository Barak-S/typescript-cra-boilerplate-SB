import { View } from 'components/Common';
import React from 'react';

import ContainedButton, { ContainedButtonProps as Props } from '.';

export default {
  title: 'components/Buttons/Contained',
  component: ContainedButton,
  args: {
    children: 'Log In',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => (
  <View column>
    <ContainedButton {...args}>
      {'Log In'}
    </ContainedButton>
    <ContainedButton {...args} size="medium" disabled />
    <ContainedButton {...args} size="medium" processing />
    <ContainedButton {...args} size="medium" endIcon="plus-circle" />
    <ContainedButton {...args} size="medium" startIcon="plus-circle" />
    <ContainedButton {...args} size="medium" color="red" />
    <ContainedButton {...args} size="large" disabled />
    <ContainedButton {...args} size="large" processing />
    <ContainedButton {...args} size="large" endIcon="plus-circle" />
    <ContainedButton {...args} size="large" startIcon="plus-circle" />
    <ContainedButton {...args} size="large" color="red" />
  </View>
);

export const Disabled = (args: any) => <ContainedButton {...args} disabled />;

export const Processing = (args: any) => <ContainedButton {...args} processing />;

export const PlusType = (args: any) => <ContainedButton {...args} endIcon="plus-circle" />;
