import React from 'react';

import AuthFormContainer, { AuthFormContainerProps as Props } from '.';

export default {
  title: 'components/Auth/FormContainer',
  component: AuthFormContainer,
}

export const Basic = (args: any) => <AuthFormContainer {...args}>{'children'}</AuthFormContainer>;
