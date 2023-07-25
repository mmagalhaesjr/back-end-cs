import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default {
  get ctx() {
    return HttpContextContract
  },
}
