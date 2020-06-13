import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import ProvidersControllers from '@modules/appointments/infra/http/controllers/ProvidersControllers'
import ProviderDayAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderDayAvailabilityController'
import ProviderMonthAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvailabilityController'

const providersRouter = Router()
const providersController = new ProvidersControllers()
const providerDayAvailabilityController = new ProviderDayAvailabilityController()
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController()

providersRouter.use(ensureAuthenticated)

providersRouter.get('/', providersController.index)
providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
)
providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
)

export default providersRouter
