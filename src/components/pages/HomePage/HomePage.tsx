import { HomeTemplate } from '@/components/templates';
import { appConfig } from '@/config';

/**
 * Renders the home screen, using the configured application name as its title.
 */
const HomePage = () => {
  return <HomeTemplate title={appConfig.appName} />;
};

export default HomePage;
