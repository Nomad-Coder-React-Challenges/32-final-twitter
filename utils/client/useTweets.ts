import useSWR from 'swr';

export default function useTweets() {
  const { data, error } = useSWR('/api/tweets');
  return { tweets: data?.data, isLoading: !data && !error };
}
