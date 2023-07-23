import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import styles from './home.styled';

import * as Atoms from '#components/atoms';
import { IconArrow } from '#components/atoms/svgs';
import { useCategoryList } from '#hooks/queries/booksQuery';
import { ScreenSizeState } from '#stores/appStateStore';

const HomeTemplate = () => {
  const theme = useTheme();
  const { isMobile } = useRecoilValue(ScreenSizeState);

  return (
    <div css={styles.container}>
      <Atoms.H1 weight='700' lineHeight='130%' css={styles.title}>
        Tweets
      </Atoms.H1>
    </div>
  );
};

export default HomeTemplate;
