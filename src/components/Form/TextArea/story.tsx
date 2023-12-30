import { View } from 'components/Common';
import React, { useState } from 'react';

import { FormTextArea, FormTextAreaProps as Props } from '.';

export default {
  title: 'components/Form/TextArea',
  component: FormTextArea,
  args: {
    defaultValue:
      'Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Nostrum, vero, modi. Reprehenderit, nihil. Ab praesentium ipsum doloremque maxime, adipisci, obcaecati!',
    label: 'Type your message',
  },
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => {
  const [value, setValue] = useState<string>(String(args.defaultValue));

  return (
    <View style={{ width: 1140 }}>
      <FormTextArea {...args} onChange={e => setValue(e.currentTarget.value)} value={value} />
    </View>
  );
};
