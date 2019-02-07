'use strict'
const User = use('App/Models/User')


class UserController
{

	async index({ view })
	{
		const users = await User.all() 
		return view.render('listado', { users: users.toJSON() })
	}

	async create({ view })
	{
		return view.render('alta')
	}
	async store({ request, response })
	{
		const category = new User()
		category.nameUser = request.input('nameUser')
		category.passwordUser = request.input('passwordUser')
		category.statusUser = request.input('statusUser')

		await category.save()
		return response.redirect('/user/agregar') 

	}
	
	async show({ params, view })
	{
		const findUser = await User.find(params.id)
		return view.render('modificar', { findUser: findUser.toJSON() })
	}
	async edit({ request, params, response })
	{
		const userUpdated = await User.find(params.id)
			  userUpdated.nameUser = request.input('nameUser')
		      userUpdated.passwordUser = request.input('passwordUser')
		
		await userUpdated.save()
		return response.redirect('/user/todas')
	}

	
}

module.exports = UserController
