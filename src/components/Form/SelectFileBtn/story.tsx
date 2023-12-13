import React from 'react';

import FormSelectFileBtn, { FormSelectFileBtnProps as Props } from '.';

export default {
  title: 'components/Form/SelectFileBtn',
  component: FormSelectFileBtn,
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <FormSelectFileBtn {...args} />;
