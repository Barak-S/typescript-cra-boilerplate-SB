import React, { useState } from 'react';

import FolderTabs, { FolderTabsProps as Props } from '.';

export default {
  title: 'components/Navigation/FolderTabs',
  component: FolderTabs,
}

export const Basic = (args: any) => {
  const [activeTab, setActiveTab] = useState<number>(1)
  return (
    <FolderTabs
      {...args}
      onChange={(num) => setActiveTab(num)}
      currentTab={activeTab}
      values={[
        { id: 0, name: 'First', content: 'Some First Content' },
        { id: 1, name: 'Second', content: 'Some Second Content' },
      ]}
    />
  );
}