import { action } from '@storybook/addon-actions';
import React, { FC, useState } from 'react';

import FormChipInput, { FormChipInputItem, FormChipInputProps as Props } from '.';

const defItems: FormChipInputItem[] = [
  {
    key: `first`,
    label: 'First',
  },
  {
    key: `second`,
    label: 'Second',
  },
  {
    key: `third`,
    label: 'Third',
  },
];

export default {
  title: 'components/Form/ChipInput',
  component: FormChipInput,
  args: {
    style: { width: 500 },
    items: defItems,
    label: 'Add tags',
  },
  argTypes: {
    items: { control: false },
    onChange: { control: false },
  },
  parameters: {
    layout: 'centered',
  },
}

const FormChipInputTemplate: FC<Omit<Props, 'onChange'>> = ({ items: inputItems, ...props }) => {
  const [items, setItems] = useState<FormChipInputItem[]>(inputItems || []);
  const handleChange = (newItems: FormChipInputItem[]) => {
    action('onChange')(newItems);
    setItems(newItems);
  };
  return <FormChipInput {...props} items={items} onChange={handleChange} />;
};

export const Basic = (args: any) => <FormChipInputTemplate {...args} />;
