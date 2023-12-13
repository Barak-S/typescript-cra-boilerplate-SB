import React, { FC, useState } from 'react';
import { action } from '@storybook/addon-actions';

import FormDateInput, { FormDateInputProps as Props } from '.';

export default {
  title: 'components/Form/DateInput',
  component: FormDateInput,
  args: {},
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

const FormDateInputTemplate: FC<Omit<Props, 'onChange'>> = ({ value: initValue, ...props }) => {
  const [value, setValue] = useState<Date | undefined>(initValue);
  const handleChange = (newValue?: Date) => {
    action('onChange')(newValue);
    setValue(newValue);
  };
  return <FormDateInput {...props} value={value} onChange={handleChange} />;
};

export const Basic = (args: any) => <FormDateInputTemplate {...args} />;
