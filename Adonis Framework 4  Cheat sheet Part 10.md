# TIPS & TRICKS ABOUT ADONIS QUERIES

____



```javascript
async fetchOneUser ({ view, params: { nameUser } }) {
    const data = await User.findOrFail(nameUser)
    return view.render('users', { data: data.toJSON() })
}
```



**EXPLANATION**

______

* `params` is an object which you can give the accesss to the param you established on your `routes`
* Note the name must be the same you declare on your `route` for this example must be `nameUser` 