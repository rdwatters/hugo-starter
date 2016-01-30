echo "Building Hugo site to \"gh-pages\" directory and pushing to GitHub."
cd ~/Sites/hugo-starter/ && rm -rf public/
hugo
git add .
git commit -m "$1"
git push