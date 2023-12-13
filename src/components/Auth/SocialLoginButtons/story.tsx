import { View } from 'components/Common';
import React from 'react';

import AuthSocialLoginButtons, { AuthSocialLoginButtonsProps as Props } from '.';

export default {
  title: 'components/Auth/SocialLoginButtons',
  component: AuthSocialLoginButtons,
}

export const Basic = (args: any) => {
  return (
    <View style={{ width: 650 }}>
      <AuthSocialLoginButtons {...args} />
    </View>
  );
};
