import statusServer from './status.routes';
import userServer from './user.routes';

export default {
  allRoutes: [statusServer, userServer],
};
