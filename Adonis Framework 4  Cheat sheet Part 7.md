# Query Scopes in AdonisJs Framework

Made with ❤️ by Alfredo Paz **Part Seven**



With *Adonis Framework* you can define a method query inside your models, I mean



You have this model

`app/models/User.js`

```javascript
class User extends Model
{
    /*
    ** ........ another code
    */
    
    questions (){
        return this.hasMany('App/Models/Question')
    }
}
```



**CLARIFICATIONS**

* As you can see we have a `hasMany` method to get all users and his related questions



### Solution One *Users with not questions related*

______

Inside your model you can create a method to store a `query` to obtain users who doesn't have questions related

```javascript
static scopeHasNotQuestions(query) {
    return query.doesntHave('questions')
}
```



Now what?... well now on your `DemoController` you will be able to invocate it in this way

```javascript
const data = await User.query().hasNotQuestions().fetch()
```



Resultset will be some like this

```javascript
[
    {
        "id": 2,
        "username": "userOne",
        "email": "user@mail.com",
        "user_status": 1,
        "created_at": "2018-12-18 21:40:10",
        "updated_at": "2018-12-18 21:40:10"
    },
    {
        "id": 3,
        "username": "userTwo",
        "email": "usuario@mail.com",
        "user_status": 1,
        "created_at": "2018-12-20 19:04:51",
        "updated_at": "2018-12-20 19:04:51"
    }
]
```



### Solution Two *Users with questions related*

______

Inside your `app/models/User.js` model you can declare a method to get all users who have questions related in this way

```javascript
static scopeHasQuestions(query) {
    return query.has('questions')
}
```



Now on your `app/controllers/http/DemoController` you can use it in this way

```javascript
const data = User.query().hasQuestions().fetch()
```



Resultset will be some like this

```javascript
[
    {
        "id": 1,
        "username": "demo",
        "email": "demo@mail.com",
        "user_status": 1,
        "created_at": "2018-12-18 20:59:28",
        "updated_at": "2018-12-18 20:59:28"
    }
]
```



### Rules to accomplish

_______________

- Methods must to be `static` to avoid the `instantion` need
- The method name must to start with the `scope` reserved `keyword`
- when you use the method inside your `DemoController` please avoid to use `scope` keyword at this moment is not necessary  



### Finally, how does looks like this query in plain SQL?

We use the `NOT EXISTS` operator inside a *subquery* in this way

```sql
SELECT * FROM users 
WHERE NOT EXISTS(SELECT * FROM questions WHERE users.id = questions.user_id);
```



Now we use the `EXISTS` operator inside a *subquery* in this way

```sql
SELECT * FROM users 
WHERE EXISTS(SELECT * FROM questions WHERE users.id = questions.user_id);
```



> stay tuned for more AdonisJs content

