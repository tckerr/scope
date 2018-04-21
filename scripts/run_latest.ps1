docker kill $(docker ps -q)
docker run -d -p 80:80 python-gs