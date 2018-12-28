# Adonis Framework 4 Cheat sheet

Adonis Framework 4 Cheat Sheet **Part 8**

Made with ❤️ by Alfredo Paz



This is the final delivery of my *AdonisJs* cheatsheets until the AdonisJs 5 release.

Objective.

Showing how the *Lucid ORM* works making different kind of queries to your database tables; nevertheless is not only that but also I wrote the pure SQL equivalent to unsertand how easy is to move between both





### WHERE and the AND operator working together 

_______________________

```javascript
const data = await User.query()
                        .where({
							'columnOne': 'valueOne',
                            'columnTwo': 'valueTwo'
                        }).fetch()
```



>  Equivalent *SQL query*

```mariadb
SELECT * FROM users WHERE(columnOne = 'valueOne') AND (columnTwo = 'valueTwo');
```





### WHERE operator working together the OR operator

____________________

```javascript
onst data = await User.query().where((query) => {
    query.where('columnOne', 'valueOne')
    	 .orWhere('columnTwo', 'valueTwo')
}).fetch()
```



>  Equivalent *SQL Query*

```mariadb
SELECT * FROM users WHERE(columnOne = 'valueOne') OR (columnTwo = 'valueTwo')
```



### Between operator inside a WHERE condition

_______________

```javascript
const data =  await User.query()
						.whereBetween('created_at', [old_date, new_date])
						.fetch()
```



>  Equivalent *SQL Query*

```mariadb
SELECT * FROM users WHERE created_at BETWEEN old_date AND new_date;
```





### Common Table Expressions

_____________

Common Table Expressions

```javascript
const data = await Database.with('consulta', (query)=> {
			query.select('username', 'title_question')
                 .from('users')
				 .join('questions', 'users.id', 'questions.user_id')
		}).select('*')
          .from('consulta')
		return data
```



>  Equivalent *SQL Query*

```mariadb
WITH consulta AS(
	SELECT username, title_question
    FROM users
    JOIN questions ON users.id = questions.user_id;
)

SELECT * FROM consulta;
```



### WHERE/IN operators

__________________

```javascript
const data = await ModelName.query().whereIn('username', ['alfa', 'beta']).fetch()
```



>  Equivalent *SQL Query*

```mariadb
SELECT * FROM users WHERE username IN('alfa', 'beta');
```



### PLUCK Method

______

```javascript
const data = await ModelName.query().pluck('columnName')
```



>  Equivalent *SQL Query*

```mariadb
SELECT columnName FROM tableName;
```



### LIMIT and OFFSET Methods

_____________________

```javascript
const data = await ModelName.query().pluck('columnName').limit(2).offset(2)
```



>  Equivalent *SQL Query*

```mariadb
SELECT columnName FROM tableName LIMIT 2,2;
```



### HAVING Operator

______

```javascript
const data = await ModelName.query().having('id', '>', 2).fetch()
```



>  Equivalent *SQL Query*

```mariadb
SELECT firstColumn, secondColumn FROM tableName HAVING id > 2;
```

