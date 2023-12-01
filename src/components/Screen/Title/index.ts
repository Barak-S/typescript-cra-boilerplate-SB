import { FC, useEffect } from 'react';

interface Props {
  title?: string;
}

export const ScreenTitle: FC<Props> = ({ title }) => {
  useEffect(() => {
    const company = 'Company';
    document.title = title ? `${title} | ${company}` : `${company || 'Title'} | ${company}`;
  });
  return null;
};

export default ScreenTitle;
