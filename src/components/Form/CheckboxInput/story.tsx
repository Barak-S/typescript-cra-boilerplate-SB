import React from 'react';

import FormCheckboxInput, { FormCheckboxInputProps as Props } from '.';

export default {
  title: 'components/Form/CheckboxInput',
  component: FormCheckboxInput,
  args: {
    label: 'Checkbox',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <FormCheckboxInput {...args} />;

export const DefaultChecked = (args: any) => <FormCheckboxInput {...args} defaultChecked />;

export const Disabled = (args: any) => <FormCheckboxInput {...args} disabled />;
