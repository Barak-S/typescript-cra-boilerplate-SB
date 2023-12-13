import React from 'react';

import FormTooltip, { FormTooltipProps as Props } from '.';

export default {
  title: 'components/Form/Tooltip',
  component: FormTooltip,
  args: {
    title: 'Tooltip',
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => <FormTooltip {...args} />;
