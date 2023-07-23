import Route from '@ioc:Adonis/Core/Route'

Route.post('/enrollment', 'EnrollmentController.store')
Route.get('/enrollment/:id', 'EnrollmentController.show')
Route.get('/enrollment/student/:id', 'EnrollmentController.show')
Route.delete('/enrollment/:id', 'EnrollmentController.destroy')
