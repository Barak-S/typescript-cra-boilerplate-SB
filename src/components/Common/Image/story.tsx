import React from 'react';
import Image, { ImageProps as Props } from '.';

export default {
  title: 'components/Common/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
}

export const Basic = (args: any) => (
  <Image {...args} style={{ width: 300, height: 200 }} source="https://picsum.photos/id/237/300/200" />
);
