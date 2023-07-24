import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { RecoilEnv, RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import '../styles/tailwind.css';

import { ErrorBoundary, Layout } from '#components/common';
import StyleProvider from '#styles/StyleProvider';

export default function App({ Component, pageProps }: AppProps) {
  // ! Next.js + Recoil.js ISSUE 대응
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false, // 컴포넌트가 마운트될 때, refetch
            refetchOnReconnect: true, // 네트워크가 재연결될 때, refetch
            refetchOnWindowFocus: false, // 브라우저 탭이 활성화될 때, refetch
            retry: 0, // query 호출 실패 시, 재호출 시도 횟수
            useErrorBoundary: false,
            cacheTime: 1000 * 60 * 30,
            staleTime: 1000 * 60 * 30,
          },
        },
      }),
  );

  return (
    <RecoilRoot>
      <Head>
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0'
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <SWRConfig
            value={{
              fetcher: (url: string) =>
                fetch(url).then((response) => response.json()),
            }}
          >
            <StyleProvider>
              <ErrorBoundary fallback={<div>Error</div>}>
                <Layout pageProps={pageProps}>
                  <Component {...pageProps} />
                </Layout>
              </ErrorBoundary>
            </StyleProvider>
          </SWRConfig>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
