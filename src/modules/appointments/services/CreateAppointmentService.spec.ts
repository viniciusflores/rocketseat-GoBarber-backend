import FakeAppointmentsRepositories from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository'
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService'
import AppError from '@shared/errors/AppError'

describe('CreateAppointment', () => {
  it('Should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepositories()
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    )

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123',
    })

    expect(appointment).toHaveProperty('id')
    expect(appointment.provider_id).toBe('123')
  })

  it('Should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepositories()
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    )

    const appointmentDate = new Date(2020, 5, 6, 10)

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123',
    })

    await expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123',
      }),
    ).rejects.toBeInstanceOf(AppError)
  })
})
