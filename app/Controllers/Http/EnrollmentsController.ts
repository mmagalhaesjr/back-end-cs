import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { EnrollmentData } from 'App/Protocols'
import EnrollmentsService from 'App/Services/EnrollmentsService'

export default class EnrollmentsController {
  public async store({ request, response }: HttpContextContract) {
    const data = request.body() as EnrollmentData

    try {
      const classroom = await EnrollmentsService.store(data)
      response.status(201).send(classroom)
    } catch (error) {
      if (error.message === 'Student already enrolled in this class') return response.status(409).send(error.message)

      if (
        error.message === 'Classroom not available for enrollment' ||
        error.message === 'Classroom capacity exceeded'
      ) {
        return response.status(401).send(error.message)
      }

      if (error.message === 'Classroom not found') return response.status(404).send(error.message)

      response.status(500)
    }
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      const enrollments = await EnrollmentsService.show(id)
      response.send(enrollments)
    } catch (error) {
      if (
        error.message === 'Classroom not found' ||
        error.message === 'No enrollments for this class'
      )
        return response.status(404).send(error.message)
      response.status(500)
    }
  }

  public async showStudentsEnrollment({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      const enrollments = await EnrollmentsService.showStudentsEnrollment(id)
      response.send(enrollments)
    } catch (error) {
      if (
        error.message === 'Classroom not found' ||
        error.message === 'No enrollments for this class'
      )
        return response.status(404).send(error.message)
      response.status(500)
    }
  }



  public async destroy({ request, response }: HttpContextContract) {
    const { id } = request.params()

    try {
      await EnrollmentsService.destroy(id)
      response.status(204)
    } catch (error) {
      if (error.message === 'Classroom not found') return response.status(404).send(error.message)
      response.status(500)
    }
  }
}
