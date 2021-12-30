import { Router } from 'express';

import { UserCreateControler } from '../controllers/User/UserCreateController';
import { GetaAllUserController } from '../controllers/User/GetAllUsersController';
import { CreateAddressController } from '../controllers/Address/AddressCreateController';
import { GetAlllAddressController } from '../controllers/Address/GetAlllAddressController';
import { RequestCreateController } from '../controllers/Request/RequestCreateController';
import { GetaAllRequestController } from '../controllers/Request/GetaAllRequestController';
import { GetOneRequestController } from '../controllers/Request/GetOneRequestController';
import { UserAuthenticateController } from '../controllers/Authenticate/UserAuthenticateController';
import { UpdateUserController } from '../controllers/User/UpdateUserController';

const userController = new UserCreateControler();
const userGetController = new GetaAllUserController();
const addressController = new CreateAddressController();
const addressGetController = new GetAlllAddressController();
const requestController = new RequestCreateController();
const requestGetController = new GetaAllRequestController();
const requestGetOneControler = new GetOneRequestController();
const authenticateController = new UserAuthenticateController();
const updateuser = new UpdateUserController();

const router = Router();

//usuários
router.post('/users', userController.handle);
router.get('/users', userGetController.handle);
router.post('/users/signin', authenticateController.handle);
router.put('/users/update/:id', updateuser.handle);

//endereço
router.post('/address', addressController.handle);
router.get('/address', addressGetController.handle);

//solicitação
router.post('/requests', requestController.handle);
router.get('/requests', requestGetController.handle);
router.get('/requests/:user_id', requestGetOneControler.handle);

export { router };
