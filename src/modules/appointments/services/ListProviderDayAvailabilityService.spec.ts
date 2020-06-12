import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository'
import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService'

let fakeAppointmentsRepository: FakeAppointmentsRepository
let listProviderDayAvailability: ListProviderDayAvailabilityService

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository()

    listProviderDayAvailability = new ListProviderDayAvailabilityService(
      fakeAppointmentsRepository,
    )
  })

  it('Should be able to list the day availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user-fake-id',
      date: new Date(2020, 5, 13, 8, 0, 0),
    })

    await fakeAppointmentsRepository.create({
      provider_id: 'user-fake-id',
      date: new Date(2020, 5, 13, 10, 0, 0),
    })

    const availability = await listProviderDayAvailability.execute({
      provider_id: 'user-fake-id',
      year: 2020,
      month: 6,
      day: 13,
    })

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: true },
        { hour: 10, available: false },
        { hour: 11, available: true },
      ]),
    )
  })
})
