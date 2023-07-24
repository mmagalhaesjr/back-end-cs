import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('/', 'ClassroomsController.store')
  Route.get('/:id', 'ClassroomsController.show')
  Route.put('/:id', 'ClassroomsController.update')
  Route.delete('/:id', 'ClassroomsController.destroy')
}).prefix('/api/classroom')
