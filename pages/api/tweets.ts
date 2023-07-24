import { NextApiRequest, NextApiResponse } from 'next';

import client from '#utils/server/client';
import withHandler from '#utils/server/withHandler';
import { withApiSession } from '#utils/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tweetList = await client.tweet.findMany({
    include: {
      user: true, // 트윗 작성자 정보도 함께 가져오기
      likes: true, // 트윗에 대한 좋아요 정보도 함께 가져오기
    },
  });
  if (!tweetList)
    return res.status(201).json({ resultCode: -1, data: '로딩 실패!' });
  res.status(200).json({ resultCode: 1, data: tweetList });
}

export default withApiSession(withHandler({ method: 'GET', handler }));
