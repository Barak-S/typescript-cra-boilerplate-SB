import React, { FC, useState } from 'react';
import { action } from '@storybook/addon-actions';

import FormCountryInput, { FormCountryInputProps as Props } from '.';

export default {
  title: 'components/Form/CountryInput',
  component: FormCountryInput,
  args: {
    style: { width: 300 },
  },
  parameters: {
    layout: 'centered',
  },
}

const FormCountryInputTemplate: FC<Props> = ({ value: initValue, ...props }) => {
  const [value, setValue] = useState<string | undefined>(initValue);
  const handleChange = (value?: string) => {
    setValue(value);
    action('onChange')(value);
  };
  return <FormCountryInput {...props} value={value} onChange={handleChange} />;
};

export const Basic = (args: any) => <FormCountryInputTemplate {...args} />;

export const Prefilled = (args: any) => <FormCountryInputTemplate {...args} />;

Prefilled.args = {
  value: 'Unites States',
};
