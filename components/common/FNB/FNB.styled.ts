import { css, Theme } from '@emotion/react';

import { Z_INDEX_LEVEL } from '#constants';
import { lightTheme } from '#styles/theme';

const wrapper = ({ theme }: { theme: Theme }) => css`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
  background-color: ${theme.colors.mono.white};
  transition-property: background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
  z-index: ${Z_INDEX_LEVEL.HEADER};
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  border: 1px solid ${theme.colors.mono[200]};
  border-bottom: none;
`;

const fnbContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: fit-content;
  transition-property: border;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
`;

const buttonContainer = css`
  flex: 1;
  width: 100%;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const button = ({
  theme,
  isDarkMode,
}: {
  theme: Theme;
  isDarkMode: boolean;
}) => css`
  display: flex;
  min-width: 56px;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 180ms;
  &:active {
    transform: scale(0.96);
    background-color: ${isDarkMode
      ? lightTheme.colors.mono.black
      : theme.colors.mono[100]};
  }
`;

const buttonText = css`
  letter-spacing: -0.03em;
`;

const styles = {
  wrapper,
  fnbContainer,
  buttonContainer,
  button,
  buttonText,
};

export default styles;
