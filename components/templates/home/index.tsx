import { useTheme } from '@emotion/react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

import styles from './home.styled';

import * as Atoms from '#components/atoms';
import { IconHeart } from '#components/atoms/svgs';
import Tweet from '#components/blocks/Tweet';
import { ScreenSizeState } from '#stores/appStateStore';
import useTweets from '#utils/client/useTweets';

const HomeTemplate = () => {
  const theme = useTheme();
  const { tweets, isLoading } = useTweets();

  return (
    <div css={styles.container}>
      {tweets?.map((tweet: any) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default HomeTemplate;
