var through = require("through2"),
	gutil = require("gulp-util"),
	reactTemplates = require("react-templates");

module.exports = function (param) {
	"use strict";

	if (!param) {
		throw new gutil.PluginError("gulp-react-templates", "No param supplied");
	}

	function reactTemplatesPipe(file, enc, callback) {
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
			var conf = {
				_: [file.path]
			};
			var ret = reactTemplates.executeOptions(conf);
			if (ret) {
				this.emit("error",
					new gutil.PluginError("gulp-react-templates", "rt " + file.path + " failed"));
			}
			file.contents = new Buffer(String(file.contents) + "\n" + param);

			this.push(file);
		}
		return callback();
	}

	return through.obj(reactTemplatesPipe);
};
