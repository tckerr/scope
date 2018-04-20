docker-machine start scope
docker build -t python-gs scope.api
docker stop $(docker ps -a -q)
docker run -d -p 80:80 python-gs
docker tag python-gs tckerr/python-gs
docker push tckerr/python-gs
# if you want to define a new task:
# aws ecs register-task-definition --cli-input-json file://task-def.json
#aws ecs update-service --service gs-service --cluster gs --force-new-deployment --health-check-grace-period-seconds --task-definition gs-task-def 40
aws ecs update-service --service gs-service --cluster gs --force-new-deployment --health-check-grace-period-seconds 40