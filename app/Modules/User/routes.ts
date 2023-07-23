import Route from '@ioc:Adonis/Core/Route'

Route.post('/user', 'UsersController.store')
Route.get('/user/:id', 'UsersController.show')
Route.put('/user/:id', 'UsersController.update')
Route.delete('/user/:id', 'UsersController.destroy')
