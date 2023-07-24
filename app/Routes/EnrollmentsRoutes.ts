import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'EnrollmentsController.store')
  Route.get('/:id', 'EnrollmentsController.show')
  Route.get('/student/:id', 'EnrollmentsController.showStudentsEnrollment')
  Route.delete('/:id', 'EnrollmentsController.destroy')
}).prefix('/api/enrollment')
