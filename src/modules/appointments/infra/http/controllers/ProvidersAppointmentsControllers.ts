import { Request, Response } from 'express'
import { container } from 'tsyringe'
import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService'

export default class ProvidersAppointmentsControllers {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id
    const { day, month, year } = request.body

    const listProviderAppointments = container.resolve(
      ListProviderAppointmentsService,
    )

    const appointments = await listProviderAppointments.execute({
      provider_id,
      month,
      year,
      day,
    })

    return response.json(appointments)
  }
}
