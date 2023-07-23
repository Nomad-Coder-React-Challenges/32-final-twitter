import { ThemeProvider } from '@emotion/react';
import { useRecoilValue } from 'recoil';

import GlobalStyles from './GlobalStyles';
import { darkTheme, lightTheme } from './theme';

import { ThemeState } from '#stores/appStateStore';

const StyleProvider = ({ children }: { children: React.ReactElement }) => {
  const themeState = useRecoilValue(ThemeState);

  return (
    <ThemeProvider theme={themeState === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
