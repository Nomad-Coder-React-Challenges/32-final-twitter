import { css, Theme } from '@emotion/react';

import { DESKTOP_SCREEN_SIZE, HEIGHTS, Z_INDEX_LEVEL } from '#constants';
import { mq } from '#styles/mediaQuery';

const header = ({ theme }: { theme: Theme }) => css`
  width: 100%;
  border-bottom: 1px solid ${theme.colors.mono[300]};
  position: fixed;
  z-index: ${Z_INDEX_LEVEL.HEADER}; // !! TODO Z-INDEX 관련 정리 필요
  background-color: ${theme.colors.mono.white};
`;

const headerBox = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${HEIGHTS.HEADER_MOBILE}px;
  margin: 0 auto;
  padding: 0 16px;
  ${mq('desktop')} {
    max-width: ${DESKTOP_SCREEN_SIZE}px;
    width: 100%;
    height: ${HEIGHTS.HEADER_DESKTOP}px;
    padding: 0 24px;
  }
`;

const menuBox = css`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const styles = {
  header,
  headerBox,
  menuBox,
};

export default styles;
