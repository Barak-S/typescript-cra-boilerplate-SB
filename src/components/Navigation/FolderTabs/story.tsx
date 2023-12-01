import React, { useState } from 'react';
import { Story, StoryMeta } from 'utils';

import FolderTabs, { FolderTabsProps as Props } from '.';

export default {
  title: 'components/Navigation/FolderTabs',
  component: FolderTabs,
}

export const Basic: Story<Props> = args => {
  const [activeTab, setActiveTab] = useState<number>(1)
  return (
    <FolderTabs
      onChange={(num) => setActiveTab(num)}
      currentTab={activeTab}
      values={[
        { id: 0, name: 'First', content: 'Some First Content' },
        { id: 1, name: 'Second', content: 'Some Second Content' },
      ]}
      {...args}
    />
  );
}