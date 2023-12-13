import React from 'react';

import AuthSectionSplitter, { AuthSectionSplitterProps as Props } from '.';

export default {
  title: 'components/Auth/SectionSplitter',
  component: AuthSectionSplitter,
}

export const Basic = (args: any) => <AuthSectionSplitter {...args}>{'Text'}</AuthSectionSplitter>;
