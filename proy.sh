set -e
 
git add *

git commit -m "deploy"

git push -u origin main 

cd ../