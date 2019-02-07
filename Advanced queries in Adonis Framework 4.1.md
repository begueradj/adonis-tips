# Adonis Framework 4 Cheat sheet



Sometimes when you are very fluent in *SQL* but you need to start to use and *ORM* such as Lucid in Adonis Framework looks like an immense wall  to jump.



To learn more about it, we're going to make the following steps

* Create tables through migrations system 
* Make queries between two or more tables with `join` operator
  * Inner Join
  * Left Join
  * Right Join
* Make subqueries
* Make queries using `CTE` 
* Window functions
* Eager loading with/without parameters
* Relationships
  * belongsTo
  * hasMany
* Aggregate functions
  * sum
  * count
  * average
  * max
  * min



### CREATING TABLES

____

User migration

```javascript
 table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.boolean('statusUser').notNullable()
      table.string('password', 60).notNullable()
      table.timestamps()
```



Category migration

```javascript
 table.increments()
      table.string('categoryName', 250).notNullable().unique()
      table.boolean('statusCategory').notNullable()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('id').inTable('users')
      table.timestamps()
```



Post migration

```javascript
 table.increments()
      table.string('namePost', 250).notNullable().unique()
      table.string('bodyPost', 200).notNullable()
      table.boolean('statusPost').notNullable()
      table.integer('user_id').unsigned()
      table.integer('category_id').unsigned()
      table.foreign('user_id').references('id').inTable('users')
      table.foreign('category_id').references('id').inTable('categories')
      table.timestamps()
```



Before to start makign queries to your database, please consider have the following ready

* User model
* Category model
* Post model



### JOINS

____

Our first task is: *get all users, including it's categories created and it's posts associated*



Pure SQL

```mariadb
SELECT username, categoryName, namePost
FROM users
JOIN categories ON users.id = categories.user_id
JOIN posts ON categories.id = posts.category_id;
```



Now with this query you get a full list, but if a user has many categories and posts made, then this users appears so many times.....



Our second task is