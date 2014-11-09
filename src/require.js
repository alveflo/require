var require = function(script) {
	var script;

	$.ajax({
	  url: script,
	  async: false,
	  dataType: "script",
	  success: function(data) {
	  	script = data;
	  	console.log("OK");
	  },
	  error: function(err) {
	  	console.log("Error");
	  	script = undefined;
	  }
	});
  	return eval(script);
};