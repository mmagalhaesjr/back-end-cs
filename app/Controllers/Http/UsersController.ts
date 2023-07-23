import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UsersService'
import prisma from 'Config/database'

export default class UsersController {
  public async store({ }: HttpContextContract) {
    return { ok: 'store' }
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      const user = await UserService.show(id)
      response.send(user)
    } catch (error) {
      response.status(500)
    }
  }

  public async update({ }: HttpContextContract) {
    return { ok: 'update' }
  }

  public async destroy({ }: HttpContextContract) {
    return { ok: 'destroy' }
  }
}
