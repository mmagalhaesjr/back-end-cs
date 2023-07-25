import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ClassroomData } from 'App/Protocols'
import ClassroomsService from 'App/Services/ClassroomsService'

export default class ClassroomsController {
  public async store({ request, response }: HttpContextContract) {
    const user = request.user

    if (!user?.professor)
      return response
        .status(401)
        .send('Unauthorized! Only professors are allowed to create a classroom')
    const data = request.body() as ClassroomData

    try {
      const classroom = await ClassroomsService.store(data)
      response.status(201).send(classroom)
    } catch (error) {
      if (error.message === 'Classroom already exists') return response.status(409).send(error.message)
      if (error.message === 'Unauthorized! Only professors are allowed to create a classroom') return response.status(401).send(error.message)
      response.status(500)
    }
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      const classroom = await ClassroomsService.show(id)
      response.send(classroom)
    } catch (error) {
      if (error.message === 'Classroom not found') return response.status(404).send(error.message)
      response.status(500)
    }
  }

  public async update({ request, response }: HttpContextContract) {
    const { id } = request.params()
    const data = request.body() as ClassroomData

    try {
      const ClassroomUpdated = await ClassroomsService.update(id, data)
      response.status(200).send(ClassroomUpdated)
    } catch (error) {
      if (error.message === 'Classroom not found') return response.status(404).send(error.message)
      if (error.message === 'Conflict Error') return response.status(409).send(error.message)
      if (error.message === 'Unauthorized! The owner must be a professor') return response.status(401).send(error.message)
      response.status(500)
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      await ClassroomsService.destroy(id)
      response.status(204).send('Classroom deleted')
    } catch (error) {
      if (error.message === 'Classroom not found') return response.status(404).send(error.message)
      response.status(500)
    }
  }
}
