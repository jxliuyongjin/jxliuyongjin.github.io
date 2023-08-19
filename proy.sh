set -e

rm -rf *

git add *

git commit -m "deploy"

git push -f git@github.com:jxliuyongjin/jxliuyongjin.github.io.git main

cd -
