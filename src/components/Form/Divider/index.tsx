import { Divider, DividerProps } from '@mui/material';
import React, { FC } from 'react';

type Props = DividerProps;

export const FormDivider: FC<Props> = props => <Divider {...props} />;

export type FormDividerProps = Props;
export default FormDivider;
