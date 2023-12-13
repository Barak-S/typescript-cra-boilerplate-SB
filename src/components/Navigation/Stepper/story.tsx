import React from 'react';

import Stepper, { StepperProps as Props } from '.';

export default {
  title: 'components/Navigation/Stepper',
  component: Stepper,
  args: {
    steps: ['First step', 'Second step', 'Third step'],
  },
}

export const Basic = (args: any) => (
  <>
    <Stepper {...args} activeStep={0} />
    <Stepper {...args} activeStep={1} />
    <Stepper {...args} activeStep={2} />
  </>
);
