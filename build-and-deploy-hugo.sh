echo "Building and Sending Changes to GitHub"
cd ~/Sites/hugo-starter/ && rm -rf public/
hugo
git add .
git commit -m "$1"
git push