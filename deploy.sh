#!/bin/bash

cp polify_demo/dist/* public/
cd public
git add *
git commit -a -m "Pre-push deploy to GitHub Pages"
git push --no-verify
cd ..

