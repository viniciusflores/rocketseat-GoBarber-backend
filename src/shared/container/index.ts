import { container } from 'tsyringe'

import '@modules/users/providers'
import '@shared/container/providers'

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository'

import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository'

import IUsersTokenRepository from '@modules/users/repositories/IUsersTokenRepository'
import UsersTokenRepository from '@modules/users/infra/typeorm/repositories/UsersTokenRepository'

import INotificationRepository from '@modules/notifications/repositories/INotificationRepository'
import NotificationsRepositories from '@modules/notifications/infra/typeorm/repositories/NotificationsRepositories'

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
)

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)

container.registerSingleton<IUsersTokenRepository>(
  'UserTokensRepository',
  UsersTokenRepository,
)

container.registerSingleton<INotificationRepository>(
  'NotificationsRepositories',
  NotificationsRepositories,
)
