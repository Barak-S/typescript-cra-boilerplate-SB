import React from 'react';

import DataTable, { DataTableProps as Props } from '.';

export default {
  title: 'components/Data/Table',
  component: DataTable,
  args: {
    headers: [
      { label: 'type of information' },
      { label: 'when it is collected' },
      { label: 'you' },
      { label: 'live event provider' },
      { label: 'automated means' },
    ],
    data: [
      {
        value: [
          'Personal Information',
          'Collected from you at registration or provided to us by your Live Event Provider',
          'Yes',
          'Yes',
          'No',
        ],
        id: 0,
      },
      {
        value: ['Sensitive Personal Information', 'When you submit any information in our app', 'Yes', 'Yes', 'No'],
        id: 1,
      },
      { value: ['Chat Messages', 'When you use the chat functionality in our app', 'Yes', 'Yes', 'No'], id: 2 },
      { value: ['Activity Information', 'When you access or use WorldStage', 'No', 'No', 'Yes'], id: 3 },
    ],
  },
  argTypes: {},
  parameters: {
  },
}

export const Basic = (args: any) => <DataTable {...args} />;
