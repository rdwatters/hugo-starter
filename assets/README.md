# Gulp Asset Pipeline for Hugo Starter

> **NOTE:** Install all NPM packages before running `gulp`. From within `hugo-starter/`, type `cd assets/ && npm install`.

### JavaScript (`js/`)

The Gulp build concatenates, minifies, and uglifies JavaScript files to improve [critical render path (CRP)](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/?hl=en).  

* All scripts in `modules/` are concatenated into a single file (`./static/js/main.min.js`. Any module can be deleted or commented out if you don't need it in your site. There are 5 modules included in the starter kit:
    1. [fluidvids.js](https://github.com/toddmotto/fluidvids). FluidVids makes YouTube and Vimeo videos responsive when an iFrame is included in a Markdown file in `content/`. This precludes use of [Hugo shortcodes](http://gohugo.io/extras/shortcodes/), which might make porting other SSG-based `.md` files more difficult.  
    2. [class-list.js](https://github.com/eligrey/classList.js/). Class toggling is one of the common uses of jQuery. `class-list.js` allows you to use syntax otherwise unsupported in <= IE9 (eg, `element.classList.add('theclass')`, `element.classList.toggle('theclass')`, and `element.classList.add('theclass')` so that you might skip adding all of jQuery for this singular feature. For more examples of ES5 workarounds for common jQuery features, visit <http://youmightnotneedjquery.com/>.
    3. `target-blank-external-links-and-print-documents.js`. Adds `target="_blank"` to all anchors for print documents (pdf, Word, Excel) and external websites. See file comments for further explanation.
    4. `blockquote-styling-based-on-hyphen-position.js`. This script extends Markdown's blockquote to include additional `<cite>` tags and classes for improved semantics and styling. See file comments for further explanation.
    5. `es2015-string-methods.js`. Adds ES2015 string methods(`str.endsWith()`,`str.beginsWith()`, str.includes()) in browsers where these methods are not supported. See file comments for further explanation.    
* The single concatenated file of all modules is transpiled through [Babel.js](https://babeljs.io/). Babel allows you to create your own modules in ES2015/ES6 syntax. `.babelrc` in `assets/` is necessary for `npm install` to include the "ES2015 preset" for transpilation.
* The transpiled file is uglified [(gulp-uglify)](https://www.npmjs.com/package/gulp-uglify), minified [(css-nano)](https://github.com/ben-eb/gulp-cssnano), renamed to `main.min.js`, and copied to `hugo-starter/static/js/`. `main.min.js` is linked as the primary global script in `/layouts/partials/global_foot/site_scripts.html`.
* If you want to add separate scripts on a per-page basis, you can do so by creating JavaScript files directly in `static/js/alt_scripts/` and then calling out the alt script in the YAML/TOML front matter of an md content file. Alternative scripts are added just before your closing `</body>` tag and *after* `main.min.js`. For example:

```
---
title: My Title
subtitle: My Subtitle
date: 2016-02-01
alt_script: alt-script-example.js
---
```

> **A NOTE ON JQUERY:** jQuery is *not* included in the modules folder since the file size slows down uglification and ES2015 transpilation. If you want to add jQuery to your site, set `IncludeJQ = true` in `config.toml`.

### CSS/SASS (`sass/`)

All (`*.scss`) are watched in `assets/scss`, including those in `assets/scss/modules/`. The sass directory includes the following:

* [Bourbon mixin library](http://bourbon.io/docs/)
* [Neat (Lightweight grid semantic framework)](http://thoughtbot.github.io/neat-docs/latest/)
* [Eric Meyer's CSS Reset 2.0](http://meyerweb.com/eric/tools/css/reset/) module
* [Animate.css](https://daneden.github.io/animate.css/) module
* `/modules/_font-face.scss` sass module. See file comments for details regarding the naming convention and inclusion of several open source fonts.
* `/modules/_social-media` a class list for all official brand colors for different social platforms. See file comments for further details.
* Basic media query mixins at `scss/_layout.scss`. Media query values can be set at the top of `/modules/_variables.scss`. `scss/_layout.scss` is a simplified version of the [media mixins included with Neat](http://thoughtbot.github.io/neat-docs/latest/#media). 

> **NOTE:** Be careful if deleting `/modules/_layout.scss` since `_typography.scss` relies on the media query mixins therein to set font sizes for headings in `variables.scss`. `_typography.scss` could probably be rewritten to leverage Neat's media query mixin.    
