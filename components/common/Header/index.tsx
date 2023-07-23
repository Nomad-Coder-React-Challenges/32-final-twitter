import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import styles from './Header.styled';

import * as Atoms from '#components/atoms';
import { IconTwitter } from '#components/atoms/svgs';
import DarkModeToggle from '#components/blocks/DarkModeToggle';
import { ScreenSizeState } from '#stores/appStateStore';

const Header = () => {
  const theme = useTheme();

  const { isMobile } = useRecoilValue(ScreenSizeState);
  return (
    <header css={styles.header({ theme })}>
      <div css={styles.headerBox}>
        <IconTwitter width={32} height={32} />
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
