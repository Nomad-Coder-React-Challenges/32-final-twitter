import { useRouter } from 'next/router';

import styles from './profile.styled';

import * as Atoms from '#components/atoms';
import useMutation from '#utils/client/useMutation';

const ProfileTemplate = () => {
  const router = useRouter();

  const { mutation: signOut } = useMutation<undefined>(
    '/api/auth/signout',
    (data) => {
      router.replace('/auth');
    },
  );

  return (
    <div css={styles.container}>
      <Atoms.Button
        text='로그아웃'
        onClick={() => {
          signOut(undefined);
        }}
      />
    </div>
  );
};

export default ProfileTemplate;
