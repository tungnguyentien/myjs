# MyJS - JavaScript Library 

MyJS is a library - collect some basic function which you often use to in client-site. My purpose when I wrote this lib was "just for fun" and use it for my pet project so if you want to use it for your production's project be carful. Some function in lib not tested yet so mabe it will not run correct all the time.

## Getting Started
Please include lib as script in your site.
```
<script src="https://cdn.abc.com/myjs.1.0.js"></script>
```
## Browser Utils
Collect function help you interactive with client browser. Examples:
```
MyJS.isMobile(); // Return true if device is mobile.

MyJS.getCookie(cName); // returns the value of a specified cookie.
MyJS.setCookie(cName, cValue, expires); // expires is time in millisecond.

MyJS.getLocalStorage(key); // Return null if browser not support Storage
MyJS.setLocalStorage(key, value);

MyJS.getUrlParams(); // Return parameters from your url as a object
MyJS.getUrlParams(key); // If key not null, return value of key in current url.
```

## Common Utils
```
var data = {
    id: 123,
    pageIndex: 2,
    sort: 'new'
};
MyJS.toQuery(data); // Return query as a string build from object data.

var newData = MyJS.clone(data); //Clone object to another object.

```

### API Utils
Collect of functions help you send http request. I use fetch to implement these function.

```
MyJS.get('https://abc.com.vn/get-something', function(err, res) {
	console.log(err, res);
});
MyJS.post('https://abc.com.vn/do-something', {x: 1, y: 2}, function(err, res) {
	console.log(err, res);
});

// If do not have network error, the err will equal null, you can check resutl of request from server by res.
```
## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We will update more features in next version.

## Authors

* **Tung Nguyen** 
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


