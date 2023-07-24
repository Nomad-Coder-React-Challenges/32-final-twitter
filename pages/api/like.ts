import { NextApiRequest, NextApiResponse } from 'next';

import client from '#utils/server/client';
import withHandler from '#utils/server/withHandler';
import { withApiSession } from '#utils/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId, tweetId } = req.body;
  const existLike = await client.like.findFirst({
    where: {
      userId,
      tweetId,
    },
  });
  if (existLike) {
    // 이미 좋아요를 누른 경우 해당 좋아요 삭제
    await client.like.delete({
      where: {
        id: existLike.id,
      },
    });
  } else {
    // 새로운 좋아요 생성
    await client.like.create({
      data: {
        userId,
        tweetId,
      },
    });
  }
  res.status(200).json({ resultCode: 1, data: '좋아요 완료!' });
}

export default withApiSession(withHandler({ method: 'POST', handler }));
