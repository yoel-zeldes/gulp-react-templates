(PLUGIN AUTHOR: Please read [Plugin README conventions](https://github.com/wearefractal/gulp/wiki/Plugin-README-Conventions), then delete this line)

# gulp-react-templates
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> react-templates plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-react-templates` as a development dependency:

```shell
npm install --save-dev gulp-react-templates
```

Then, add it to your `gulpfile.js`:

```javascript
var react-templates = require("gulp-react-templates");

gulp.src("./src/*.ext")
	.pipe(react-templates({
		msg: "Hello Gulp!"
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### react-templates(options)

#### options.msg
Type: `String`  
Default: `Hello World`

The message you wish to attach to file.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-react-templates
[npm-image]: https://badge.fury.io/js/gulp-react-templates.png

[travis-url]: http://travis-ci.org/yoel-zeldes/gulp-react-templates
[travis-image]: https://secure.travis-ci.org/yoel-zeldes/gulp-react-templates.png?branch=master

[coveralls-url]: https://coveralls.io/r/yoel-zeldes/gulp-react-templates
[coveralls-image]: https://coveralls.io/repos/yoel-zeldes/gulp-react-templates/badge.png

[depstat-url]: https://david-dm.org/yoel-zeldes/gulp-react-templates
[depstat-image]: https://david-dm.org/yoel-zeldes/gulp-react-templates.png
