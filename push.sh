#!/bin/bash
ts=$(date -u +"%m-%d-%Y %H:%M:%S")
token=${{secrets.GITHUB_TOKEN}}
git config http.sslVerify false
git config --local user.email "github-actions[bot]@users.noreply.github.com"
git config --local user.name "github-actions[bot]"
git add -A
git commit -m "Automated push at ${ts}"
git push "https://${GITHUB_ACTOR}:${token}@github.com/${GITHUB_REPOSITORY}.git"
exit 0