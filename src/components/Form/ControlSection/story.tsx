import React from 'react';

import FormControlSection, { FormControlSectionProps as Props } from '.';
import { FormTextInput } from '../TextInput';

export default {
  title: 'components/Form/ControlSection',
  component: FormControlSection,
  args: {
    title: 'Title',
    description: 'Description',
    hint: 'Hint',
    children: <FormTextInput />,
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <FormControlSection {...args} />;
