'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')


Route.get('/user/todas', 'UserController.index')
Route.get('/user/modificar/:id', 'UserController.show')
Route.post('/user/:id', 'UserController.edit')

Route.get('/user/agregar', 'UserController.create')
Route.post('/user', 'UserController.store')