import Route from '@ioc:Adonis/Core/Route'
import 'App/Modules/User/routes'
import 'App/Modules/Classroom/routes'
import 'App/Modules/Enrollment/routes'

Route.where('id', /^[0-9]+$/)
