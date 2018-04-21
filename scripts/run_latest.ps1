docker kill $(docker ps -q)
docker run -d -p 80:80 --env-file "$($PSScriptRoot)/.env" python-gs 