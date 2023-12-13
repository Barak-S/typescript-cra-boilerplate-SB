import { action } from '@storybook/addon-actions';
import { View } from 'components/Common';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC, useState } from 'react';

import FormPasswordInput, { FormPasswordInputProps as Props } from '.';

export default {
  title: 'components/Form/PasswordInput',
  component: FormPasswordInput,
  args: {
    label: 'Password',
  },
  parameters: {
    layout: 'centered',
  },
}

const FormPasswordInputTemplate: FC<Omit<Props, 'value' | 'onChange' | 'onChangeVisibleClick' | 'visible'>> = props => {
  const [value, setValue] = useState<string>('12345678');
  const [visible, setVisible] = useState<boolean>(false);

  const handleChangeVisibleClick = () => {
    action('onChangeVisibleClick')();
    setVisible(!visible);
  };

  return (
    <FormPasswordInput
      value={value}
      visible={visible}
      onChange={event => setValue(event.currentTarget.value)}
      onChangeVisibleClick={handleChangeVisibleClick}
      {...props}
    />
  );
};

export const Basic = (args: any) => (
  <View column style={{ width: 300 }}>
    <FormPasswordInputTemplate {...args} />
    <FormPasswordInputTemplate {...args} style={{ marginTop: 30 }} iconStart={<LineAwesomeIcon type="lock" />} />
  </View>
);

export const Valid = (args: any) => (
  <View column style={{ width: 300 }}>
    <FormPasswordInputTemplate {...args} valid />
    <FormPasswordInputTemplate {...args} style={{ marginTop: 30 }} iconStart={<LineAwesomeIcon type="lock" />} valid />
  </View>
);

// eslint-disable-next-line max-len
const helperText = `Password length must be minimum 8 characters, should be alphanumeric with 1 special character. Password length must be minimum 8 characters, should be alphanumeric with 1 special character.`;

export const Error = (args: any) => (
  <View column style={{ width: 300 }}>
    <FormPasswordInputTemplate {...args} error helperText={helperText} />
    <FormPasswordInputTemplate
      {...args}
      style={{ marginTop: 30 }}
      iconStart={<LineAwesomeIcon type="lock" />}
      error
      helperText={helperText}
    />
  </View>
);
