import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'EnrollmentsController.store')
  Route.get('/:id', 'enrollmentsentsController.show')
  Route.put('/:id', 'enrollmentstsController.update')
  Route.delete('/:id', 'enrollmentsmentsController.destroy')
}).prefix('/enrollments')
