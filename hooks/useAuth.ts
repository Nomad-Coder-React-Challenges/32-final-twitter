import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { ProfileResponse } from '#types/models';

export default function useAuth() {
  const [user, setUser] = useState<ProfileResponse>();
  const router = useRouter();
  useEffect(() => {
    fetch('/api/auth/check')
      .then((response) => response.json())
      .then((data) => {
        if (data.resultCode !== 1) {
          return router.replace('/auth');
        }
        setUser(data.data);
      });
  }, [router]);
  return user;
}
