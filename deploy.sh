#!/user/bin/env sh

set -e

npm run build

cd dist

git push -f git@github.com:CodeMingo21/CodeMingo21.github.io.git main:gh-pages

cd -