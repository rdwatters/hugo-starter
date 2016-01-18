# Gulp Asset Pipeline for Hugo Starter

> **NOTE:** Before using Gulp as your build tool, you will need to install the necessary node modules after cloning the hugo-starter repository. `cd` into the `/hugo-starter/assets` and type `npm install` from the command line.

The "assets" folder in hugo-starter contains. the following:

* `js/`. This folder will contain all of your JavaScript modules. If gulp is running, adding new files or modifying existing js files to `modules/` will kick off the following process:
    * All scripts in `modules/` will be concatenated into a single file. The two included modules are as follows:
        * [fluidvids.js](https://github.com/toddmotto/fluidvids). This allows you to add iFrames for YouTube and Vimeo directly to your `.md` files in `content/` and make them responsive without having to use [Hugo shortcodes](http://gohugo.io/extras/shortcodes/). This may come in handy if you if you are copying markdown files from another static site generator. 
        * [classList.js](https://github.com/eligrey/classList.js/). In my opinion, the most common use-case for publishing sites and jQuery is the ease of switching classes. Simply put, `classList.js` allows you to use `element.classList.add('theclass')`, `element.classList.toggle('theclass')`, and `element.classList.add('theclass')` in browsers that to not support that feature of ES5 (ie, IE 7-9).   
    * The newly concatenated file will be transpiled via [Babel.js](https://babeljs.io/) for ES6 transpilation, which means you can write your JavaScript using future JS syntax. **NOTE:** you will need the `.babelrc` in `assets/` so that `npm install` includes the basic presets for ES2015 transpilation. 
    * The transpiled file is then uglified [(gulp-uglify)](https://www.npmjs.com/package/gulp-uglify), minified, renamed to `main.min.js` and copied to `hugo-starter/static/` and included in `hugo-start/layouts/partials/global_foot/site_scripts.html`.
    * If you want to add separate scripts on a per-page basis, you can do so by creating javascript files directly in `static/js/alt_scripts/` and then calling out the alt script in the YAML/TOML of the front matter for a page (eg, `alt_script: my-alt-script.js`). This script is then piped in near just before your closing `</body>` tag so that it loads after `main.min.js`.
    * **A NOTE ON JQUERY.** jQuery is *not* included in the modules folder since the file size slows down uglification and ES6 transpilation. Instead, adding jQuery to your site can be done in your `config.toml` file with the `IncludeJQ` parameter (default: false), which adds the jQuery CDN to the `<head>` of your HTML.
* `scss/`. All (`*.scss`) are watched in this folder by your Gulp build. The sass setup includes the following:
    * [Bourbon mixin library](http://bourbon.io/)
    * [Neat lightweight semantic grid framework](http://neat.bourbon.io/)
    * A simple grid system at `scss/_layout.scss` that makes embedding media queries in nested selectors very easy. The MQ values are set in `/modules/_variables.scss` if you would like to use these mixins. If you decided to delete this mixin, know that the default `_typography.scss` relies on them to set font sizes across different devices. 
    * A modified reset that also pulls values from the `_variables.scc` to keep your final minified file size low. 
