# Hugo Starter with Gulp Asset Pipeline

I put together this starter kit to provide some basic boiler plate for creating static sites with [Hugo](https://gohugo.io/). If you are confused about the current architecture of the starter, every HTML includes thorough comments. For more detailed information on the Gulp Asset Pipeline, see the [README in the `assets` folder](https://github.com/rdwatters/hugo-starter/tree/master/assets).

### Requirements

* Hugo. If you don't already have the binary, [here are the directions for installation](https://gohugo.io/overview/installing/).
* Node.js. You can download and install on the [Node.js the installer page](https://nodejs.org/en/download/). Installation from the Node.js website includes NPM, which you will need for installation of all js development dependencies.

> If this is your first site, I'd recommend installing Node.js, Hugo, *and* Git via the [Homebrew Package Manager](https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme)

### Getting Started

* `cd ~/path/to/your/site/directory/`
* `git clone https://github.com/rdwatters/hugo-starter`
* `cd hugo-starter && hugo serve`
* (New Terminal Tab) `cd assets/ && npm install` 
* `gulp`
* Open your browser to `localhost:1313`. You should see an `<h1>` with "Hugo Starter Kit" and social icons.

### Gulp Asset Pipeline (See README in `assets/` for details)

* CSS reset
* SASS compiling with minification and autoprefixer 
* `variables.scss` with basic media query, 

* [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/) Mixins 
* JavaScript concatenation, minification, and [ES6 transpilation](https://babeljs.io/)

### Global Partials

* Create your pages with `{{ partial "site_header.html" }}` and `{{ partial "site_footer.html" }}` on all single or list layouts 
* Global partials include favicons, site navigation/header, metadata (including [OGP](http://ogp.me/) for social sharing), search form, site footer, site copyright, footer navigation
* Two options for stylesheets via external `<link>` or embedding via critical render path (boolean parameter in `config.toml`)
* Site scripts with conditional templating allowing for additional page- or section-specific scripts

### `temp` Section with `temp-stylesheets` and `alt-scripts`

* `temp/` allows for singleton pages with alt stylesheets and scripts that can be created at the page level 
* `temp` creates one-off pages with convenient short URLs (see `[permalinks]` in `config.toml`)

### `config.toml`

* Disqus comments 
* Social media
* Taxonomies (tags, categories)
* jQuery CDN (boolean)
* Minimal BlackFriday settings
 
### SVG Icons

* 30 svg icons in `partials/svg_icons` for easier embedding, easier styling, resolution independence, and fewer HTTP requests 
* Includes social media icons in site footer

### Utilities

* `linkcheck.go`. Run this file from the root by typing `go linkcheck.go` to see if any of your internal links are broken. Errors should be thrown to the terminal.
* `build-and-deploy-hugo.sh`. (In Development) See script comments before running `bash build-and-deploy-hugo.sh`. 
* `CNAME`,`robots.txt` 
   