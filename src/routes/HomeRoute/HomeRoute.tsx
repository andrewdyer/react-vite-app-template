import { HomePage } from '@/components/pages';

/**
 * Handles the URL and navigation for the home screen.
 *
 * @remarks
 * The home screen reads no URL parameters and performs no navigation, so the route only renders {@link HomePage}.
 */
const HomeRoute = () => {
  return <HomePage />;
};

export default HomeRoute;
