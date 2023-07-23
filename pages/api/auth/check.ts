import { NextApiRequest, NextApiResponse } from 'next';

import { CheckResponse } from '#types/models';
import client from '#utils/server/client';
import withHandler from '#utils/server/withHandler';
import { withApiSession } from '#utils/server/withSession';

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CheckResponse>,
) {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });
  if (!profile) return;
  const profileData = {
    id: profile.id,
  };
  res.json({
    resultCode: 1,
    data: profileData,
  });
}

export default withApiSession(
  withHandler({
    method: 'GET',
    handler,
  }),
);
