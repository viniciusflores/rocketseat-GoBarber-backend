import { Router } from 'express'

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController'
import ProvidersAppointmentsControllers from '@modules/appointments/infra/http/controllers/ProvidersAppointmentsControllers'

const appointmentsRouter = Router()
const appointmentsController = new AppointmentsController()
const providersAppointmentsControllers = new ProvidersAppointmentsControllers()

appointmentsRouter.use(ensureAuthenticated)

appointmentsRouter.post('/', appointmentsController.create)
appointmentsRouter.get('/me', providersAppointmentsControllers.index)

export default appointmentsRouter
