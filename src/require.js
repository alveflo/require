var require = function(script) {
	var script;

	$.ajax({
	  url: script,
	  async: false,
	  dataType: "script",
	  success: function(data) {
	  	script = data;
	  },
	  error: function(err) {
	  	if (console != null) {
	  		console.log(err);
	  	}
	  	script = null;
	  }
	});
	if (script != null)
	  	return eval(script);
};