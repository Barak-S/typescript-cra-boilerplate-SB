import React from 'react';

import FormImgFileSelectRoundedBtn, { FormImgFileSelectRoundedBtnProps as Props } from '.';

export default {
  title: 'components/Form/ImgFileSelectRoundedBtn',
  component: FormImgFileSelectRoundedBtn,
  args: {},
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <FormImgFileSelectRoundedBtn {...args} />;

export const Selected = (args: any) => <FormImgFileSelectRoundedBtn {...args} />;

Selected.args = {
  src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
};

export const Processing = (args: any) => <FormImgFileSelectRoundedBtn {...args} />;

Processing.args = {
  processing: true,
};
