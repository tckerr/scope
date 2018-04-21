docker kill $(docker ps -q) 
docker rm gs
docker run -d -p 80:80 --env-file "$($PSScriptRoot)/.env" --name gs python-gs 