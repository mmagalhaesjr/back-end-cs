import Route from '@ioc:Adonis/Core/Route'

Route.post('/classroom', 'ClassroomsController.store')
Route.get('/classroom/:id', 'ClassroomsController.show')
Route.put('/classroom/:id', 'ClassroomsController.update')
Route.delete('/classroom/:id', 'ClassroomsController.destroy')
