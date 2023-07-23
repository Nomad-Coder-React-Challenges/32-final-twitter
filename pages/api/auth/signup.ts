import { NextApiRequest, NextApiResponse } from 'next';

import client from '#utils/server/client';
import withHandler from '#utils/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body;
  let user;
  if (email) {
    user = await client.user.findUnique({
      where: { email },
    });
    if (!user) {
      user = await client.user.create({
        data: {
          name,
          email,
          password,
        },
      });
    } else {
      res.status(201).json({ resultCode: -1, data: '이미 가입된 회원' });
    }
  }
  res.status(200).json({ resultCode: 1, data: '회원가입 성공!' });
}

export default withHandler({ method: 'POST', handler, isPrivate: false });
