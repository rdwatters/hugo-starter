# Hugo Starter with Gulp Asset Pipeline

I put together this starter kit to provide some basic boiler plate for creating static sites with [Hugo](https://gohugo.io/). Every HTML file in this starter contains thorough comments. This starter kit includes the following:

### 

### *Global Partials:**

* Create your pages with `{{ partial "global_head.html" }}` and `{{ partial "global_foot.html" }}` on all single or list layouts. 
* Globals include favicons, global navigation and site header, metadata (including OGP for Social Sharing), search form, site footer, site copyright, footer navigation, and stylesheets via external call or embedding via critical render path (a boolean set in `config.toml`; see the config file for more details).
* Site script with conditional templating for use cases where you want an additional script run for a specific page.

### `temp` Section with `temp-stylesheets` and `alt-scripts`

* If you're building a larger publishing site, you may want to create temporary, one-off pages for marketing purposes.
* You can use the `temp` section to create these pages with nice short URLs (see `config.toml` `[permalinks]`).
* 

### **config.toml**

* Includes site-wide variables for easier management of Disqus comments, CRP, footer social media values
 
### *SVG icons**

* 30 svg icons are included in `partials/svg_icons` for easier embedding/styling in HTML, including social media lists at page bottom.

### Extra Utilities

* `linkcheck.go`. Run this file from the root by typing `go linkcheck.go` to see if any of your internal links are broken. Errors should be thrown to the terminal.
* `build-and-deploy-hugo.sh`. (Being Developed) A handy BASH script that walks you through clearing out your old publish directory, rebuilding your Hugo site, setting up an alias for quicker deployments, and deploying to GH pages for free hosting. 
* `CNAME`,`robots.txt`,etc. Nothing huge, but I figured I would save you a step:smiley:. 
   