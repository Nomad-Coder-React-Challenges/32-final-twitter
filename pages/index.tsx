import { HomeTemplate } from '#components/templates';
import useAuth from 'hooks/useAuth';

const HomePage = () => {
  const user = useAuth();
  return <HomeTemplate />;
};

export default HomePage;
