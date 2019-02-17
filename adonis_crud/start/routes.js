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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'UserController.index').as('user.index')
Route.get('user/create', 'UserController.create').as('user.create')
Route.post('user', 'UserController.store').as('user.store')
Route.get('user/:id', 'UserController.show').as('user.show')
Route.get('user/:id/edit', 'UserController.edit').as('user.edit')
Route.post('user/:id', 'UserController.update').as('user.update')
