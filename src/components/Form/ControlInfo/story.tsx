import React from 'react';

import FormControlInfo, { FormControlInfoProps as Props } from '.';

export default {
  title: 'components/Form/ControlInfo',
  component: FormControlInfo,
  args: {
    title: 'Control Title',
    description: 'Control Description',
    hint: 'Control Hint',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <FormControlInfo {...args} />;
