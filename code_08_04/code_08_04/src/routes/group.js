import { Router } from 'express';
import { GroupController } from '../controllers/controllers';
import { isAuth } from '../middlewares/auth';
import { Response } from '../libs/handle_response';

let routerApp = new Router();

routerApp.get('/getAll', isAuth, Response(GroupController.getAllGroup));
routerApp.put('/update', isAuth, Response(GroupController.updateGroup));
routerApp.get('/get-info', isAuth, Response(GroupController.getGroupInfo));
routerApp.get('/delete', isAuth, Response(GroupController.deleteGroup));
routerApp.post('/add', isAuth, Response(GroupController.addGroup));
routerApp.post('/register', isAuth, Response(GroupController.userRergisterGroup));
routerApp.get('/out', isAuth, Response(GroupController.userOutGroup));
routerApp.get('/force-out', isAuth, Response(GroupController.forceUserOutGroup));

export default routerApp;