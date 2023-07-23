import { useTheme } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Thumbnail.styled';

import * as Atoms from '#components/atoms';
import { IconArrow } from '#components/atoms/svgs';
import { BooksModel } from '#types/models';

interface ThumbnailProps {
  info: BooksModel;
}

const Thumbnail = ({ info }: ThumbnailProps) => {
  const theme = useTheme();
  return (
    <article css={styles.container({ theme })}>
      <section css={styles.thumbnailContainer}>
        <Image
          fill
          src={info.book_image}
          alt={`${info.title}-thumbnail`}
          priority
          quality={75}
        />
      </section>
      <section css={styles.descriptionContainer}>
        <div>
          <Atoms.H2 css={styles.title} weight='700' lineHeight='130%'>
            {info.title}
          </Atoms.H2>
          <Atoms.H4 css={styles.author} lineHeight='100%'>
            {info.author}
          </Atoms.H4>
        </div>
        <Link href={info.amazon_product_url} target='_blank' prefetch={false}>
          <Atoms.Button
            text='Buy Now'
            rightIcon={
              <IconArrow
                width={12}
                height={12}
                stroke={theme.colors.mono.black}
              />
            }
          />
        </Link>
      </section>
    </article>
  );
};

export default Thumbnail;
