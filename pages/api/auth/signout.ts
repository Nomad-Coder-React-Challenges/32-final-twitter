import { NextApiRequest, NextApiResponse } from 'next';

import withHandler from '#utils/server/withHandler';
import { withApiSession } from '#utils/server/withSession';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.status(200).json({ resultCode: 1, data: '로그아웃' });
}

export default withApiSession(withHandler({ method: 'POST', handler }));
