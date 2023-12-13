import React from 'react';

import FormRadioInput, { FormRadioInputProps as Props } from '.';

export default {
  title: 'components/Form/RadioInput',
  component: FormRadioInput,
  args: {
    label: 'Radio',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <FormRadioInput {...args} />;
