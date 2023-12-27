import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import { WithStyles } from '@mui/styles';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import Typography from '@mui/material/Typography';
import { LineAwesomeIcon } from 'components/Icons';
import React, { FC } from 'react';
import { StyleProps } from 'styles';

interface Props extends WithStyles<typeof styles>, StyleProps {
  onClose?: () => void;
}

const DialogClosableTitle: FC<Props> = ({ children, style, classes, onClose }) => {
  return (
    <DialogTitle style={style} className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          size="large">
          <LineAwesomeIcon type="times" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export default withStyles(styles)(DialogClosableTitle);
