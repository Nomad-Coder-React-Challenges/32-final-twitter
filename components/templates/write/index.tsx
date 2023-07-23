import { useTheme } from '@emotion/react';

import styles from './write.styled';

import * as Atoms from '#components/atoms';
import WriteForm from '#components/blocks/Form/WriteForm';

const WriteTemplate = () => {
  const theme = useTheme();

  return (
    <div css={styles.container}>
      <WriteForm />
    </div>
  );
};

export default WriteTemplate;
