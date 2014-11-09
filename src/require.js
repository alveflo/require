var require = function(script) {
	var script;

	$.ajax({
	  url: script,
	  async: false,
	  dataType: "script",
	  success: function(data) {
	  	script = data;
	  }
	});
	if (script != null)
	  	return eval(script);
};