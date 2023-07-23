import Route from '@ioc:Adonis/Core/Route'
import 'App/Routes/ClassroomsRoutes'
import 'App/Routes/EnrollmentsRoutes'
import 'App/Routes/UsersRoutes'

Route.where('id', {
  match: /^[0-9]+$/,
  cast: (id) => Number(id),
})

