import { css } from '@emotion/react';

import { DESKTOP_SCREEN_SIZE } from '#constants';
import { mq } from '#styles/mediaQuery';

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  max-width: ${DESKTOP_SCREEN_SIZE}px;
  user-select: none;
  padding: 16px;
  gap: 16px;

  ${mq('desktop')} {
    align-items: flex-start;
    padding: 24px;
    gap: 24px;
  }
`;

const title = css`
  margin: 24px 0;
`;

const content = css`
  text-align: center;
  ${mq('desktop')} {
    text-align: left;
  }
`;

const styles = {
  container,
  title,
  content,
};

export default styles;
