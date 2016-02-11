# NOTE: This script will remove everything in the public directory, rebuild the site to public/, and copy json site index from /json/index.html to /json/site-index.json 
echo "Building Hugo site and pushing to GitHub."
cd ~/Sites/hugo-starter/ && rm -rf public/
hugo
cd public/json/
cp index.html site-index.json
