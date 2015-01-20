# gulp-react-templates
[![NPM version][npm-image]][npm-url]

> [react-templates](http://wix.github.io/react-templates) plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-react-templates` as a development dependency:

```shell
npm install --save-dev gulp-react-templates
```

Then, add it to your `gulpfile.js`:

```javascript
var react-templates = require("gulp-react-templates");

gulp.src("./src/*.rt")
	.pipe(react-templates({
		modules: 'amd'
	}))
	.pipe(gulp.dest("./dist"));
```

## API

### react-templates(options)
The options `gulp-react-templates` can get are the same as `react-templates`'s options. Just type `rt --help` in your shell in order to learn about the available options.


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-react-templates
[npm-image]: https://badge.fury.io/js/gulp-react-templates.png
