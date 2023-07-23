import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import prisma from 'Config/database'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    return { ok: 'store' }
  }

  public async show({ request, response }: HttpContextContract) {
    return { ok: 'update' }
  }

  public async update({}: HttpContextContract) {
    return { ok: 'update' }
  }

  public async destroy({}: HttpContextContract) {
    return { ok: 'destroy' }
  }
}
