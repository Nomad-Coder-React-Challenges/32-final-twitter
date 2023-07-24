import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';

import styles from './Header.styled';

import * as Atoms from '#components/atoms';
import { IconTwitter } from '#components/atoms/svgs';
import DarkModeToggle from '#components/blocks/DarkModeToggle';
import { ScreenSizeState } from '#stores/appStateStore';

const Header = () => {
  const theme = useTheme();
  const router = useRouter();

  const { isMobile } = useRecoilValue(ScreenSizeState);
  return (
    <header css={styles.header({ theme })}>
      <div css={styles.headerBox}>
        <IconTwitter
          width={32}
          height={32}
          onClick={() => {
            router.push('/');
          }}
          className='cursor-pointer'
        />
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
