import { Text } from 'components/Common';
import React, { FC, useState } from 'react';

import Accordion, { AccordionProps as Props } from '.';

export default {
  title: 'components/Navigation/Accordion',
  component: Accordion,
  args: {
    style: { width: 300 },
    id: 'accordion',
    title: 'Accordion',
    expanded: false,
  },
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <Accordion
      {...args}
      expanded={isExpanded}
      onChange={() => setIsExpanded(!isExpanded)}
    >
      <Text>Hello World</Text>
    </Accordion>
  )
}