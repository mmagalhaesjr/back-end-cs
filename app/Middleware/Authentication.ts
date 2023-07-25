import AuthRepository from '../Respositories/AuthRepository';
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

declare module '@ioc:Adonis/Core/Request' {
  interface RequestContract {
    user: any
  }
}
export default class Authentication {
  public async handle({ ctx, request, response }: HttpContextContract, next: () => Promise<void>) {
    const { authorization } = request.headers()
    const token = authorization?.replace('Bearer ', '')

    if (!token) return response.status(401).send('No token')

    try {
      const userToken = await AuthRepository.show(token)
      if (!userToken) return response.status(401).send('Token not found')

      request.user = userToken.users
      await next()
    } catch (error) {
      response.status(500)
    }
  }
}
