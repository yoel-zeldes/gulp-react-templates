/*global describe, it*/
"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	reactTemplates = require("../");

describe("gulp-react-templates", function () {

	var expectedFile = new gutil.File({
		path: "test/expected/hello.rt.js",
		cwd: "test/",
		base: "test/expected",
		contents: fs.readFileSync("test/expected/hello.rt.js")
	});

	it("should produce expected file via buffer", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/hello.rt",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.readFileSync("test/fixtures/hello.rt")
		});

		var stream = reactTemplates({force: true, modules: 'amd'});

		stream.on("error", function(err) {
			should.exist(err);
			done(err);
		});

		stream.on("data", function (newFile) {
			should.exist(newFile);
			should.exist(newFile.contents);

			var newContents = newFile.contents.toString();
			var expectedContents = expectedFile.contents.toString();

			if (expectedContents.length === newContents.length + 1 &&
				expectedContents[expectedContents.length - 1] === '\n') {
				// My IDE adds a blank line at the end of the file...
				expectedContents = expectedContents.substr(0, expectedContents.length - 1);
			}

			newContents.should.equal(expectedContents);
			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it("should error on stream", function (done) {

		var srcFile = new gutil.File({
			path: "test/fixtures/hello.rt",
			cwd: "test/",
			base: "test/fixtures",
			contents: fs.createReadStream("test/fixtures/hello.rt")
		});

		var stream = reactTemplates({force: true, modules: 'amd'});

		stream.on("error", function(err) {
			should.exist(err);
			done();
		});

		stream.on("data", function (newFile) {
			newFile.contents.pipe(es.wait(function(err, data) {
				done(err);
			}));
		});

		stream.write(srcFile);
		stream.end();
	});

});
