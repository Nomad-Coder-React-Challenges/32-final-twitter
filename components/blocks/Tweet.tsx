interface TweetProps {
  tweet: any;
}
import { useTheme } from '@emotion/react';
import Image from 'next/image';
import router from 'next/router';
import { mutate } from 'swr';

import * as Atoms from '#components/atoms';
import { IconHeart } from '#components/atoms/svgs';
import { WriteReqModel } from '#types/models';
import useMutation from '#utils/client/useMutation';
import useAuth from 'hooks/useAuth';

const Tweet = ({ tweet }: TweetProps) => {
  const theme = useTheme();

  const user = useAuth();

  const { mutation: like, isFetching } = useMutation('/api/like', (data) => {
    data.resultCode === 1 && mutate('/api/tweets');
  });

  const userLike =
    user && tweet.likes.find((like: any) => like.userId === user.id);
  return (
    <article key={tweet.id} className='w-full flex items-start gap-4'>
      <Image
        src={
          tweet.avatar ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdBtfYoDknj6xsQqMwjAXDdgcCO1al-WSlSwtu1hZXEw&s'
        }
        width={45}
        height={45}
        alt='profile'
        className='rounded-full'
      />
      <section className='w-full flex flex-col items-start gap-2'>
        <Atoms.H3 weight='700'>{tweet.user.name}</Atoms.H3>
        <Atoms.H4 weight='400'>{tweet.content}</Atoms.H4>
        <button
          className='w-full flex gap-2 items-center cursor-pointer'
          onClick={() => {
            like({ userId: user && user.id, tweetId: tweet.id });
          }}
        >
          <IconHeart
            width={16}
            height={16}
            stroke={userLike ? theme.colors.error[500] : theme.colors.mono[400]}
            fill={userLike ? theme.colors.error[500] : theme.colors.mono.white}
          />
          <Atoms.H6>{tweet.likes.length}</Atoms.H6>
        </button>
      </section>
    </article>
  );
};

export default Tweet;
