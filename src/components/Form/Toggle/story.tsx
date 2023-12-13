import React, { FC, useState } from 'react';
import { action } from '@storybook/addon-actions';

import FormToggle, { FormToggleProps as Props } from '.';

export default {
  title: 'components/Form/Toggle',
  component: FormToggle,
  args: {
    title: 'Toggle',
  },
  parameters: {
    layout: 'centered',
  },
}

const FormToggleTemplate: FC<Omit<Props, 'value' | 'onChange'>> = (args: any) => {
  const [value, setValue] = useState<boolean>(false);

  const handleChange = (val: boolean) => {
    action('onChange')(val);
    setValue(val);
  };

  return <FormToggle {...args} value={value} onChange={handleChange} />;
};

export const Basic = (args: any) => <FormToggleTemplate {...args} />;
