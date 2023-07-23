import { useTheme } from '@emotion/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './FNB.styled';

import * as Atoms from '#components/atoms';
import {
  IconHome,
  IconMoon,
  IconPencil,
  IconSun,
  IconUser,
} from '#components/atoms/svgs';
import { usePrefersColorScheme } from '#hooks';

const FNB = () => {
  const theme = useTheme();
  const router = useRouter();

  const { isDarkMode } = usePrefersColorScheme();

  const fnbContents = [
    {
      id: 0,
      name: '홈',
      url: '/',
      icon: (
        <IconHome
          width={24}
          height={24}
          stroke={
            router.pathname === '/'
              ? theme.colors.primary[500]
              : theme.colors.mono[400]
          }
        />
      ),
    },
    {
      id: 1,
      name: '글쓰기',
      url: '/write',
      icon: (
        <IconPencil
          width={24}
          height={24}
          stroke={
            router.pathname === '/write'
              ? theme.colors.primary[500]
              : theme.colors.mono[400]
          }
        />
      ),
    },
    {
      id: 2,
      name: '프로필',
      url: '/profile',
      icon: (
        <IconUser
          width={24}
          height={24}
          stroke={
            router.pathname === '/profile'
              ? theme.colors.primary[500]
              : theme.colors.mono[400]
          }
        />
      ),
    },
  ];

  return (
    <div css={styles.wrapper({ theme })}>
      <section css={styles.fnbContainer}>
        {fnbContents.map((icon) => (
          <Link key={icon.id} href={icon.url} css={styles.buttonContainer}>
            <button css={styles.button({ theme, isDarkMode })}>
              {icon.icon}
              <Atoms.H6
                css={styles.buttonText}
                weight={router.pathname === icon.url ? '700' : '400'}
                color={
                  router.pathname === icon.url
                    ? theme.colors.primary[500]
                    : theme.colors.mono[300]
                }
              >
                {icon.name}
              </Atoms.H6>
            </button>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default FNB;
