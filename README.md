require
=======

Super simple client side require/include for javascript - basically just an ajax call and eval().

### Usage
Again - this few lines of code that imports js-script is just doing the following:
* A synchronous AJAX call to fetch the file
* using eval() to evaluate the script

That being said, you'll need to be backed up with a web server in order to get the AJAX call to work.

#### Dependencies
* jQuery

#### JS "interface"
In order to export functions and variables they needs to be injected to the objects prototype:
```javascript
this.prototype = {
	add: function(a,b) {
		return a + b;
	},
	sub: function(a,b) {
		return a - b;
	},
	mul: function(a,b) {
		return a * b;
	},
	div: function(a,b) {
		return a / b;
	}
}
```

#### Importing and usage
```html
<html>
	<head>
		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script src="require/src/require.js"></script> 
	</head>
	<body>
		<script>
			var example = require('example.js');
			console.log(example.add(1,2));
			// yields 3
			console.log(example.sub(1,2));
			// yields -1
			console.log(example.mul(1,2));
			// yields 2
			console.log(example.div(1,2));
			// yields 0.5
		</script>
	</body>
</html>
```
### Licence
MIT
