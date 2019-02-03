# Adonis Framework 4 Cheat sheet

Made with ❤️ by Alfredo Paz **Part Six**





### PARAMETERS IN ROUTES

____

When you write url to your system, maybe you will need to pass parameters so you need to know the following

```javascript
Route.get('/adonis/:boss', async({ params }){
	const boss = params.boss
    return boss
})
```



**CLARIFICATIONS**

- The correct sintax is `:parametername`
- To read this value you can use `params` object 



### GROUPING ROUTES

____

Maybe your system has routes like these

```html
localhost:3333/data/v1/queryOne
localhost:3333/data/v1/queryTwo
```



As you can see, both have same name only pointing different methods: `queryOne` and `queryTwo`

So simply use the `prefix()` method to group them in this way

```javascript
Route.group(() => {
    Route.get('/queryOne', 'DemoController.queryOne')
    Route.get('/queryTwo', 'DemoController.queryTwo')
}).prefix('data/v1')
```



**CLARIFICATIONS**

* You will need to use the `group()` method
* Inside declare all your routes which will need a prefix
* at the end you'll use the `prefix()` method and inside of it declare the `prefix`

