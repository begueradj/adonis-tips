# Adonis Framework 4 Cheat sheet

Made with ❤️ by Alfredo Paz **Part Two**



Obviously in Adonis Framework you can use the **eagger loading concept** in this way



#### Relation hasMany

_____

Under the concept one user has many posts, you need to write the following method on your `User` Model

```javascript
posts()
{
    return this.hasMany('App/Models/Post')
}
```



**CLARIFICATIONS**

* The `hasMany()` method helps you to get all posts associated with the User Model
* The `posts` method name must be in plural
* As you see you need to write the partial location for your `Post` model





After that on your **UserController** you can get all users and their posts in this way

```javascript
const User = use('App/Models/User')

class UserController
{
    async fetchAll()
    {
        let data = await User.query().with('posts').fetch()
        return data
    }
}
```



**CLARIFICATIONS**

* At the beginning of your controller you create a `User` const to get your `User` model
* Inside a custom mehod you create a query to get all users and it's posts associated 
* To use the *eager loading*  concept you need to use the `with()` method and as a parameter inside single quotes the `posts` name declared inside your User Model



#### Relation hasMany (sending data to a view)

___

Now if you need to pass this data from **UserController** to a **users.edge** view in this way

```javascript
const User = use('App/Model/User')

class UserController 
{
    async fetchAll({ view })
    {
        let data = await User.query().with('posts').fetch()
        return view.render('users', { data: data.toJSON() })
    }
}
```



**CLARIFICATIONS**

* Make use of the `view` object to access and indicate which view you'll use

* The `view` object access to the `render` method

* The `render` method uses two parameters

  * First one inside single quotes the view name
  * variable which contains data using  `toJSON()` method

  

Now inside the **users.edge** view print all data in this way



```javascript
	<table>
		<tr>
			<th>Nombre del Usuario</th>
			<th>Nombre del Post</th>
			<th>Creado el: </th>
		</tr>
			@each(registro in data)
			<tr>
				<th>{{ registro.nameUser }}</th>
				@each(post in registro.posts)
						<th>{{ post.namePost }}</th>
						<th>{{ post.created_at }}</th>
				@endeach
			</tr>
			@endeach
	</table>

```

