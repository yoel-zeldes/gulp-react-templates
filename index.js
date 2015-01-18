var through = require("through2"),
	gutil = require("gulp-util"),
	fs = require("fs")
	reactTemplates = require("react-templates");

module.exports = function (param) {
	"use strict";

	function reactTemplatesPipe(file, enc, callback) {
		/*jshint validthis:true*/

		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			this.emit("error",
				new gutil.PluginError("gulp-react-templates", "Stream content is not supported"));
			return callback();
		}

		if (file.isBuffer()) {
			param = param || {};
			param._ = [file.path];
			var ret = reactTemplates.executeOptions(param);
			if (ret) {
				this.emit("error",
					new gutil.PluginError("gulp-react-templates", "rt " + file.path + " failed"));
			}

			file.contents = new Buffer(fs.readFileSync(file.path + ".js"));
			file.path = file.path + '.js';

			this.push(file);
		}
		return callback();
	}

	return through.obj(reactTemplatesPipe);
};
