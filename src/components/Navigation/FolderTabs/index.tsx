import AppBar from '@mui/material/AppBar';
import {
  createTheme,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  useTheme,
  adaptV4Theme,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { View } from 'components/Common';
import React, { ChangeEvent, FC, ReactNode } from 'react';
import { colors, StyleProps } from 'styles';

import TabPanel from './components/TabPanel';
import { useStyles } from './styles';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


interface Props extends StyleProps {
  values: TabValue[];
  currentTab?: number | undefined;
  onChange?: (newVal: number) => void;
}

interface TabValue {
  id: number;
  name: string;
  content: ReactNode;
}

export const FolderTabs: FC<Props> = ({ values, currentTab, onChange, style }) => {
  const handleChange = (_event: ChangeEvent<unknown>, newValue: number) => {
    if (onChange) {
      onChange(newValue);
    }
  };

  const getA11yProps = (index: number) => {
    return {
      id: `folder-tab-${index}`,
      'aria-controls': `folder-tabpanel-${index}`,
    };
  };
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <View style={style}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={overrides}>
          <AppBar className={classes.container} position="static">
            <Tabs
              classes={{ root: classes.root }}
              TabIndicatorProps={{ style: { background: colors.white } }}
              className={classes.tabs}
              value={currentTab}
              onChange={handleChange}
            >
              {values.map(el => (
                <Tab key={el.id} className={classes.tab} label={el.name} {...getA11yProps(el.id)} />
              ))}
            </Tabs>
          </AppBar>
        </ThemeProvider>
      </StyledEngineProvider>
      <div className={classes.content}>
        {values.map(el => (
          <TabPanel key={el.id} value={currentTab || 0} index={el.id}>
            <div className={classes.blockContent}>{el.content}</div>
          </TabPanel>
        ))}
      </div>
    </View>
  );
};

const overrides = createTheme(adaptV4Theme({
  overrides: {
    MuiTabs: {
      root: {
        overflow: 'visible',
      },
    },
    MuiTab: {
      root: {
        letterSpacing: 3,
        fontWeight: 600,
        maxWidth: '20%',
        padding: 0,
        '&.Mui-selected': {
          background: `${colors.white}`,
          color: `${colors.primary}`,
          boxShadow: `0 -3px 4px -1px ${colors.silver};`,
          '&:first-child': {
            boxShadow: ` -1.5px -3px 4px -1px ${colors.silver};`,
          },
          '&:last-child': {
            boxShadow: ` 1.5px -3px 4px -1px ${colors.silver};`,
          },
        },
      },
    },
  },
}));

export type FolderTabsProps = Props;
export default FolderTabs;
