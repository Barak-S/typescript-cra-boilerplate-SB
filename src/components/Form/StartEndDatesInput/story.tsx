import { action } from '@storybook/addon-actions';
import React, { FC, useState } from 'react';

import FormStartEndDatesInput, { FormStartEndDatesInputProps as Props, FormStartEndDatesInputValue as Value } from '.';

export default {
  title: 'components/Form/StartEndDatesInput',
  component: FormStartEndDatesInput,
  args: {
    // style: { width: 200 },
  },
  parameters: {
    layout: 'centered',
  },
}

const FormStartEndDatesInputTemplate: FC<Omit<Props, 'value' | 'onChange'>> = (args: any) => {
  const [value, setValue] = useState<Value | undefined>(undefined);
  const handleChange = (val: Value | undefined) => {
    setValue(val);
    action('onChange')(val);
  };
  return <FormStartEndDatesInput {...args} value={value} onChange={handleChange} />;
};

export const Basic = (args: any) => <FormStartEndDatesInputTemplate {...args} />;
