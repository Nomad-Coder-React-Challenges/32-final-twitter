import { NextApiRequest, NextApiResponse } from 'next';

import client from '#utils/server/client';
import withHandler from '#utils/server/withHandler';
import { withApiSession } from '#utils/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, content } = req.body;
  const newTweet = await client.tweet.create({
    data: {
      content,
      userId,
    },
  });
  if (!newTweet)
    return res.status(201).json({ resultCode: -1, data: '작성 실패!' });
  res.status(200).json({ resultCode: 1, data: '업로드 완료!' });
}

export default withApiSession(withHandler({ method: 'POST', handler }));
