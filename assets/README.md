# Gulp Asset Pipeline for Hugo Starter

> **NOTE:** Before using Gulp as your build tool, you will need to install the necessary node modules after cloning the hugo-starter repository. From the command line, `cd` into the `/hugo-starter/assets` and type `npm install` from the command line.

### JavaScript (`js/`)

The Gulp build concatenates, minifies, and uglifies JavaScript files to observe best practices w/r/t critical render path [critical render path (CRP)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en).  

* All scripts in `modules/` will be concatenated into a single file. There are three preloaded files with the starter:
    * [fluidvids.js](https://github.com/toddmotto/fluidvids). This allows you to add iFrames for YouTube and Vimeo directly to your `.md` files in `content/` and make them responsive without having to use [Hugo shortcodes](http://gohugo.io/extras/shortcodes/). This may come in handy if you if you are copying markdown files from another static site generator (eg, Jekyll, Hexo). 
    * [classList.js](https://github.com/eligrey/classList.js/). In my opinion, the most common use-case for publishing sites and jQuery is the ease of switching classes. Simply put, `classList.js` allows you to use `element.classList.add('theclass')`, `element.classList.toggle('theclass')`, and `element.classList.add('theclass')` in browsers that to not support that feature of ES5 (ie, IE 7-9).
    * `target-blank-external-links`. This script adds `target="_blank"` to all anchors to print documents (pdf, Word, Excel) and external websites.    
* The concatenated file is then run through [Babel.js](https://babeljs.io/) for ES6 transpilation, which means you can write your JavaScript using future JS syntax. **NOTE:** you will need the `.babelrc` in `assets/` so that `npm install` includes the "ES2015" preset package for transpilation. The current Babel package does not include the classList polyfill, which is why it's included with the starter.
* The Babel-transpiled file is then uglified [(gulp-uglify)](https://www.npmjs.com/package/gulp-uglify), minified, renamed to `main.min.js` and copied to `hugo-starter/static/` and included as a link in `hugo-start/layouts/partials/global_foot/site_scripts.html`.
* If you want to add separate scripts on a per-page basis, you can do so by creating JavaScript files directly in `static/js/alt_scripts/` and then calling out the alt script in the YAML/TOML of the front matter for a page (eg, `alt_script: alt-script-example.js`). This script is then piped in just before your closing `</body>` tag and after `main.min.js`.
* **A NOTE ON JQUERY.** jQuery is *not* included in the modules folder since the file size slows down uglification and ES6 transpilation. Instead, adding jQuery to your site can be done in your `config.toml` file with the `IncludeJQ` parameter (default: true), which adds the jQuery CDN to the `<head>` of your HTML.

### CSS/SASS (`sass/`)

All (`*.scss`) are watched in `assets/scss`, including those in `assets/scss/modules/`. The sass directory includes the following:

* [Bourbon mixin library](http://bourbon.io/docs/)
* [Neat (Lightweight grid semantic framework)](http://thoughtbot.github.io/neat-docs/latest/)
* A simple grid system at `scss/_layout.scss` that makes embedding media queries in nested selectors very easy. The MQ values are set at the top of  `/modules/_variables.scss`. If you do want to include this set of media query mixins, know that the default `_typography.scss` relies on them to set font sizes across different devices. 
* A slightly tweaked reset (`assets/scss/modules/_reset.scss`). This reset includes values from the `_variables.scc` in an effort to keep your final minified `style.min.css` as small as possible. 
