import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger_output.json';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import BandController from './app/controllers/BandController';
import VenueController from './app/controllers/VenueController';

const routes = new Router();

routes.use('/api/docs', swaggerUi.serve);
routes.get('/api/docs', swaggerUi.setup(swaggerFile));

routes.get('/api', (req, res) => {
    res.status(200).send({
        success: "true",
        title: 'Seja bem-vindo(a) no GigAPI + Node.js + PostgreSQL!',
        version: '1.0.0'
    });
});

routes.get('/users', UserController.show);
routes.post('/users', UserController.store);

routes.get('/bands', BandController.show);
routes.post('/bands', BandController.store);

routes.get('/venues', VenueController.show);
routes.post('/venues', VenueController.store);

routes.post('/sessions', SessionController.store);
//routes.post('/sessions', SessionController.store.bind(SessionController));
//console.log(SessionController.store.bind(SessionController));
// routes.post('/users', UserController.index);
// routes.post('/users', UserController.show);
// routes.post('/users', UserController.update);
// routes.post('/users', UserController.delete);

//routes.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
routes.put('/users/:id', AuthMiddleware, UserController.update);
routes.put('/bands/:id', AuthMiddleware, BandController.update);
routes.put('/venues/:id', AuthMiddleware, VenueController.update);

export default routes;
