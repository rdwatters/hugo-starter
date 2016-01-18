# Hugo Starter with Gulp Asset Pipeline

I put together this starter kit to provide some basic boiler plate for creating static sites with [Hugo](https://gohugo.io/). If you are confused about the current architecture of the starter, every HTML includes thorough comments. For more detailed information on the Gulp Asset Pipeline, see the [README in the `assets` folder](https://github.com/rdwatters/hugo-starter/tree/master/assets).

### Requirements

* Hugo. If you don't already have the binary, [here are the directions for installation](https://gohugo.io/overview/installing/).
* Node.js. If you don't have node.js install, you can download and install it  [from the installer page](https://nodejs.org/en/download/). Installation from the Node.js website includes NPM, which you will need for installation of all js development dependencies. 

### Getting Started

From the command line, `cd` into the directory where you would like to build your site.

* `git clone https://github.com/rdwatters/hugo-starter`
* `cd hugo-starter && hugo serve`
* (New Tab) `cd assets/ && npm install`
* `gulp`
* Open your browser to `localhost:1313`. You should see an `<h1>` with "Ryan's Hugo Starter Kit" and a series of 7 Social icons on the bottom left of the page.

### Gulp Asset Pipeline (See README in `assets/` for more details)

* CSS Reset with `_variables.scss` for some basic defaults, including typography
* SASS compiling with minification and autoprefixer
* Bourbon and Neat Mixins
* JavaScript Concatenation, minification, and ES6 transpilation

### Global Partials

* Create your pages with `{{ partial "global_head.html" }}` and `{{ partial "global_foot.html" }}` on all single or list layouts 
* Global partials include favicons, global navigation and site header, metadata (including OGP for Social Sharing), search form, site footer, site copyright, footer navigation, and stylesheets via external call or embedding via critical render path (a boolean set in `config.toml`; see the config file for more details)
* Site scripts with conditional templating for page-level additions

### `temp` Section with `temp-stylesheets` and `alt-scripts`

* `temp/` allows for singleton pages with alt stylesheets and scripts that can be created at the page level 
* You can use the `temp` section to create these pages with nice short URLs (see `config.toml` `[permalinks]`)

### `config.toml`

* Disqus comments
* Social media settings
* Taxonomies (tags, categories)
* jQuery CDN (boolean)
* BlackFriday settings
 
### SVG Icons

* 30 svg icons are included in `partials/svg_icons` for easier embedding/styling in HTML, including social media lists at page bottom.

### Handy Utilities

* `linkcheck.go`. Run this file from the root by typing `go linkcheck.go` to see if any of your internal links are broken. Errors should be thrown to the terminal.
* `build-and-deploy-hugo.sh`. (In Development) A handy BASH script that walks you through clearing out your old publish directory, rebuilding your Hugo site, setting up an alias in `.bash_profile` for convenience, and deploying to GH pages for free hosting. 
* `CNAME`,`robots.txt`, etc. Nothing huge, but I figured I would save you a step:smiley:. 
   