import React, { FC, useState } from 'react';

import LineTabs, { LineTabsProps as Props } from '.';

export default {
  title: 'components/Navigation/LineTabs',
  component: LineTabs,
  args: {
    tabs: [
      { index: 0, label: 'First' },
      { index: 1, label: 'Second' },
      { index: 2, label: 'Third' },
    ],
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

const LineTabsTemplate: FC<Omit<Props, 'tab' | 'onChange'>> = props => {
  const [tab, setTab] = useState<number>(0);
  return <LineTabs {...props} tab={tab} onChange={(_e, val) => setTab(val)} />;
};

export const Basic = (args: any) => <LineTabsTemplate {...args} />;
