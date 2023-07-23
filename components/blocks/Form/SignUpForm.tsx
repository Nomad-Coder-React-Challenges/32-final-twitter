import { useTheme } from '@emotion/react';
import { useCallback, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import * as Atoms from '#components/atoms';
import { AuthSignUpReqModel } from '#types/models';
import useMutation from '#utils/client/useMutation';

const SignUpForm = () => {
  const theme = useTheme();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AuthSignUpReqModel>({
    mode: 'onChange',
  });

  const { mutation: signUp, isFetching } = useMutation<AuthSignUpReqModel>(
    '/api/auth/signup',
    (data) => {
      window.alert(data?.data);
      // if (data.resultCode === 1) {

      // }
    },
  );

  const onSubmit: SubmitHandler<AuthSignUpReqModel> = useCallback(
    async (data) => {
      signUp(data);
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
        <Atoms.H5>이름</Atoms.H5>
        {errors.name?.message && (
          <Atoms.H6 color={theme.colors.error[500]}>
            {errors.name?.message}
          </Atoms.H6>
        )}
        <Atoms.Input
          width={'100%'}
          {...register('name', { required: '이름을 입력해주세요.' })}
          isError={errors.name?.type === 'required'}
        />
      </section>
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
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: '이메일 형식이 올바르지 않습니다.', // Your custom error message
            },
          })}
          isError={
            errors.email?.type === 'required' ||
            errors.email?.type === 'pattern'
          }
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
        text={isFetching ? '로딩 중...' : '가입하기'}
        color='primary'
        width={'100%'}
      />
    </form>
  );
};

export default SignUpForm;
