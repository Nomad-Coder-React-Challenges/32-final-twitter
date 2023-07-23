import { ProfileTemplate } from '#components/templates';
import useAuth from 'hooks/useAuth';
import { META_TAG } from 'metatag';

const ProfilePage = () => {
  const user = useAuth();
  return <ProfileTemplate />;
};

export default ProfilePage;

export async function getStaticProps() {
  return {
    props: {
      title: META_TAG['profile']['title'],
      description: META_TAG['profile']['description'],
    },
  };
}
