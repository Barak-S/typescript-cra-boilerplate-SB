import { View } from 'components/Common';
import React from 'react';
import { sbAutoDetectActionProps, Story, StoryMeta } from 'utils';

import AuthSocialLoginButtons, { AuthSocialLoginButtonsProps as Props } from '.';

export default {
  title: 'components/Auth/SocialLoginButtons',
  component: AuthSocialLoginButtons,
  parameters: {
    actions: { ...sbAutoDetectActionProps },
  },
}

export const Basic: Story<Props> = args => {
  return (
    <View style={{ width: 650 }}>
      <AuthSocialLoginButtons {...args} />
    </View>
  );
};
