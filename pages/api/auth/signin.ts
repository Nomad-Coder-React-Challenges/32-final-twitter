import { NextApiRequest, NextApiResponse } from 'next';

import client from '#utils/server/client';
import withHandler from '#utils/server/withHandler';
import { withApiSession } from '#utils/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  const exist = await client.user.findUnique({
    where: {
      email,
      password,
    },
  });
  if (!exist)
    return res
      .status(201)
      .json({ resultCode: -1, data: '아이디 혹은 비밀번호가 맞지 않습니다!' });
  req.session.user = {
    id: exist.id,
  };
  await req.session.save();
  res.status(200).json({ resultCode: 1, data: '로그인 성공!' });
}

export default withApiSession(
  withHandler({ method: 'POST', handler, isPrivate: false }),
);
