import React from 'react';
import { StoryMeta, Story } from 'utils';

import AuthFormContainer, { AuthFormContainerProps as Props } from '.';

export default {
  title: 'components/Auth/FormContainer',
  component: AuthFormContainer,
}

export const Basic: Story<Props> = args => <AuthFormContainer {...args}>{'children'}</AuthFormContainer>;
