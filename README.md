# Hugo Starter Kit with Gulp Asset Pipeline

## About This Kit

This kit includes basic boilerplate for creating static sites with [Hugo](https://gohugo.io/). 

If you are confused about source organization, build steps, modules, etc, every partial, `.js`, and `.scss` file includes thorough comments. 

For more detailed information on the Gulp Asset Pipeline, see the [README in the `assets` folder](https://github.com/rdwatters/hugo-starter/tree/master/assets).

## What This Kit Is *Not*

This kit is not a theme. This kit is for those who want to build their site's style from scratch.

This kit is not a replacement for the [official Hugo Documentation](http://gohugo.io/overview/introduction/). If you are new to Hugo, I'd recommend reading the documentation first. If you have questions related to building your site, join the [Hugo Discuss Forum](https://discuss.gohugo.io/). 

This kit is (probably) not as friendly to PC users since my development experience is limited to OSX. This is a shortcoming on my part. I'll continue to develop the documentation to be cross-platform.

> **Note:** The workflow inherent in the build process is my own and reflects my own biases. This kit may be too opinionated for seasoned developers. My intent is to provide sane defaults and save beginners time.

## Requirements

* Hugo. [The Hugo site provides installation instructions](https://gohugo.io/overview/installing/).
* Node.js. You can download and install Node via the [Node.js installer page](https://nodejs.org/en/download/). Installation includes NPM, the package manager for Node. You will need both to run the asset pipeline.
* Git. Put your project in version control if you're willing to do more than download the zip. I cannot emphasize this enough.

> **Note:** If this is your first experience with any of the above tools, I'd recommend installing Node.js, Hugo, *and* Git via the [Homebrew Package Manager for OSX](https://github.com/Homebrew/homebrew/tree/master/share/doc/homebrew#readme)

## Getting Started

Once you've installed the requirements - 

* `cd ~/path/to/your/site/directory/`
* `git clone https://github.com/rdwatters/hugo-starter`
* `cd hugo-starter && hugo serve`
* (New Terminal Tab) `cd assets/ && npm install` 
* `gulp`
* Open your browser to `localhost:1313`. You should see "Hugo Starter Kit" and social icons.

## Features

### Gulp Asset Pipeline (See README in `assets/` for details)

* CSS reset
* SASS compiling with minification and autoprefixer 
* `variables.scss` for easier customization
* [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/) Mixins 
* JavaScript concatenation, minification, and [ES2015 transpilation](https://babeljs.io/)

### Global Partials

* Create your pages with `{{ partial "site_header.html" }}` and `{{ partial "site_footer.html" }}` on all single or list layouts 
* `site_header.html` includes the following:
    * Metadata:
        * Favicons
        * [OGP](http://ogp.me/) for social sharing
        * [Swiftype V2 Metadata](https://swiftype.com/documentation/meta_tags2). This can be removed if you do not intend to use Swiftype.
    * Site stylesheet
        * Via `<link rel="stylesheet">` OR direct embed for critical render path. See comment in `config.toml` for more directions
    * Site `<header>`:
        * global navigation
        * search form
* `site_footer.html` includes the following:  
    * Copyright Line 
    * Footer navigation
    * Site scripts with conditional templating to add page- or section-specific scripts
    * Social media list with SVG icons

### `/content/singletons/` Section with `singletons-stylesheets` and `alt-scripts`

* `/content/singletons/` allows for singleton pages requiring alternative stylesheets and scripts
* `temp` creates one-off pages with convenient short URLs (see `[permalinks]` in `config.toml`)

## `config.toml`

* Sane site parameters pulled from Hugo docs example
* Disqus comments 
* Social media
* Taxonomies (tags, categories)
* jQuery CDN (boolean)
* Minimal BlackFriday settings
 
## SVG & Font Awesome Icons

* 30 svg icons in `partials/svg_icons` for easier embedding and styling via CSS, resolution independence, and fewer HTTP requests 
* On your first `hugo server`, all social media icons in the bottom left are pulled from the SVG icon directory
* Font Awesome Version 4.5.0 (`/assets/scss/fontawesome/\*scss` & `/static/css/fonts/fontawesome` for actual font files). You can search the full list of icons [here](https://fortawesome.github.io/Font-Awesome/icons/).

## Open Source Fonts

* `/static/css/fonts/` includes Open Sans, Lato, Montserrat, Noto Serif, Raleway, Roboto, Source Sans Pro, and Ubuntu.
* `/assets/scss/modules/_font-face.scss` has been created with a naming convention so that you can include the font of your choice with a single `$font` variable in `variables.scss`. See the comments in `_font-face.scss` and `variables.scss` for more details.

## Utilities

* `linkcheck.go`. Run this file from the root by typing `go linkcheck.go` to see if any of your internal links are broken. Errors should be thrown to the terminal.
* `build-and-deploy-hugo.sh`. (In Development) See script comments before running `bash build-and-deploy-hugo.sh`. 
* `CNAME`,`robots.txt` 
   