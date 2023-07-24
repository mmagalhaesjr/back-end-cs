import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from 'App/Services/UsersService'
import { UserData } from 'App/Protocols'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const data = request.body() as UserData

    try {
      const user = await UserService.store(data)
      response.status(201).send(user)
    } catch (error) {
      if (error.message === 'User already exists') return response.status(409).send(error.message)
      response.status(500)
    }
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      const user = await UserService.show(id)
      response.send(user)
    } catch (error) {
      if (error.message === 'User not found') return response.status(404).send(error.message)
      response.status(500)
    }
  }

  public async update({ }: HttpContextContract) {
    return { ok: 'update' }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      await UserService.destroy(id)
      response.status(204)
    } catch (error) {
      if (error.message === 'User not found') return response.status(404).send(error.message)
      response.status(500)
    }
  }
}
