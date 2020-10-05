import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import resultRouters from '@modules/results/infra/http/routes/result.routes';
import userRoutes from '@modules/users/infra/http/routes/users.routes';
import swaggerDocument from '../swagger';

const routes = Router();

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/result', resultRouters);
routes.use('/user', userRoutes);

export default routes;
