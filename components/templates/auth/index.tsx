import { useTheme } from '@emotion/react';
import { useState } from 'react';

import styles from './auth.styled';

import * as Atoms from '#components/atoms';
import SignInForm from '#components/blocks/Form/SignInForm';
import SignUpForm from '#components/blocks/Form/SignUpForm';

const AuthTemplate = () => {
  const theme = useTheme();

  const [isSignIn, setIsSignIn] = useState(true);

  const handleChangeFormClick = (value: boolean) => () => {
    setIsSignIn(value);
  };

  return (
    <div css={styles.container}>
      <Atoms.H1 weight='700' lineHeight='130%' css={styles.title}>
        환영합니다!
      </Atoms.H1>
      <section className='w-full flex items-center gap-4 justify-between'>
        <Atoms.Button
          text='로그인'
          width={'100%'}
          className='flex-1'
          color={isSignIn ? 'line' : 'default'}
          onClick={handleChangeFormClick(true)}
        />
        <Atoms.Button
          text='회원가입'
          width={'100%'}
          className='flex-1'
          color={isSignIn ? 'default' : 'line'}
          onClick={handleChangeFormClick(false)}
        />
      </section>
      {isSignIn ? <SignInForm /> : <SignUpForm />}
    </div>
  );
};

export default AuthTemplate;
