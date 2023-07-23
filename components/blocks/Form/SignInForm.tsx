import { useTheme } from '@emotion/react';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as Atoms from '#components/atoms';
import { AuthSignInReqModel } from '#types/models';
import useMutation from '#utils/client/useMutation';

const SignInForm = () => {
  const theme = useTheme();
  const router = useRouter();

  const { mutation: signIn, isFetching } = useMutation<AuthSignInReqModel>(
    '/api/auth/signin',
    (data) => {
      window.alert(data?.data);
      router.replace('/');
    },
  );

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthSignInReqModel>({
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<AuthSignInReqModel> = useCallback(
    async (data) => {
      signIn(data);
    },
    [],
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
        <Atoms.H5>이메일</Atoms.H5>
        {errors.email?.message && (
          <Atoms.H6 color={theme.colors.error[500]}>
            {errors.email?.message}
          </Atoms.H6>
        )}
        <Atoms.Input
          width={'100%'}
          {...register('email', {
            required: '이메일을 입력해주세요.',
          })}
          isError={errors.email?.type === 'required'}
        />
      </section>
      <section className='w-full flex flex-col gap-2 items-start'>
        <Atoms.H5>비밀번호</Atoms.H5>
        {errors.password?.message && (
          <Atoms.H6 color={theme.colors.error[500]}>
            {errors.password?.message}
          </Atoms.H6>
        )}
        <Atoms.Input
          type='password'
          width={'100%'}
          {...register('password', { required: '비밀번호를 입력해주세요.' })}
          isError={errors.password?.type === 'required'}
        />
      </section>
      <Atoms.Button
        type='submit'
        text={isFetching ? '로그인 중...' : '로그인'}
        color='primary'
        width={'100%'}
      />
    </form>
  );
};

export default SignInForm;
