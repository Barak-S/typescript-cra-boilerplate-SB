import React from 'react';

import FormDragnDropImage, { FormDragnDropImageProps as Props } from '.';

export default {
  title: 'components/Form/DragnDropImage',
  component: FormDragnDropImage,
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <FormDragnDropImage {...args} />;

export const Processing = (args: any) => <FormDragnDropImage {...args} />;

Processing.args = {
  processing: true,
};

Processing.argTypes = {
  processing: {
    control: false,
  },
};

export const Image = (args: any) => <FormDragnDropImage {...args} />;

Image.args = {
  src: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7',
};

Image.argTypes = {
  processing: {
    src: false,
  },
};
