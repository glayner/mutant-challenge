import { Router } from 'express';

import ReaultController from '../controller/ReaultController';

const resultRouters = Router();
const reaultController = new ReaultController();

resultRouters.get('/', reaultController.index);
resultRouters.post('/', reaultController.create);

export default resultRouters;
