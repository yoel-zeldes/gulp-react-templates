var through = require("through2"),
	gutil = require("gulp-util"),
	reactTemplates = require("react-templates");

module.exports = function (param) {
	"use strict";

	if (!param) {
		throw new gutil.PluginError("gulp-react-templates", "No param supplied");
	}

	function reactTemplates(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			this.emit("error",
				new gutil.PluginError("gulp-react-templates", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {
			file.contents = new Buffer(String(file.contents) + "\n" + param);

			this.push(file);
		}
		return callback();
	}

	return through.obj(reactTemplates);
};
