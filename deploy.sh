#!/user/bin/env sh

set -e

npm run build

cd dist

git push -f git@github.com:CodeMingo21/final-project-vue.git main:gh-pages

cd -