import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as Atoms from '#components/atoms';
import { WriteReqModel } from '#types/models';
import useMutation from '#utils/client/useMutation';
import useAuth from 'hooks/useAuth';

const WriteForm = () => {
  const theme = useTheme();
  const router = useRouter();

  const user = useAuth();
  console.log(user);

  const { mutation: write, isFetching } = useMutation<WriteReqModel>(
    '/api/write',
    (data) => {
      window.alert(data?.data);
      router.replace('/');
    },
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<WriteReqModel>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<WriteReqModel> = useCallback(
    async (data) => {
      if (!user) return;
      const tweetData = { userId: user.id, content: data.content };
      write(tweetData);
    },
    [write, user],
  );

  const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && !(e.target instanceof HTMLTextAreaElement)) {
      e.preventDefault();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={handleEnterKeyDown}
      className='w-full flex flex-col gap-4 justify-start items-center'
    >
      <section className='w-full flex flex-col gap-2 items-start'>
        <Atoms.H5>글 내용</Atoms.H5>
        {errors.content?.message && (
          <Atoms.H6 color={theme.colors.error[500]}>
            {errors.content?.message}
          </Atoms.H6>
        )}
        <Atoms.Textarea
          width={'100%'}
          register={register('content', {
            required: '글 내용을 입력해주세요.',
          })}
        />
      </section>
      <Atoms.Button
        type='submit'
        text={isFetching ? '업로드 중...' : '글쓰기'}
        color='primary'
        width={'100%'}
      />
    </form>
  );
};

export default WriteForm;
