import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import IUsersTokenRepository from '@modules/users/repositories/IUsersTokenRepository'

interface IRequest {
  token: string
  password: string
}

@injectable()
class ResetPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UsersTokenRepository')
    private usersTokenRepository: IUsersTokenRepository,
  ) {}

  public async execute({ token, password }: IRequest): Promise<void> {
    const userToken = await this.usersTokenRepository.findByToken(token)

    if (!userToken) {
      throw new AppError('User token does not exists')
    }

    const user = await this.usersRepository.findById(userToken.user_id)

    if (!user) {
      throw new AppError('User does not exists')
    }

    user.password = password

    await this.usersRepository.save(user)
  }
}

export default ResetPasswordEmailService
