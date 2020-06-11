import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import ProvidersControllers from '@modules/appointments/infra/http/controllers/ProvidersControllers'

const providersRouter = Router()
const providersController = new ProvidersControllers()

providersRouter.use(ensureAuthenticated)

providersRouter.get('/', providersController.index)

export default providersRouter
