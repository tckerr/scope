# if you want to define a new task:
#aws ecs register-task-definition --cli-input-json file://task-def.json
#aws ecs update-service --service gs-service --cluster gs --force-new-deployment --health-check-grace-period-seconds --task-definition gs-task-def 40
aws ecs update-service --service gs-service --cluster gs --force-new-deployment --task-definition gs-task-def --health-check-grace-period-seconds 40