# Introduction
The purpose of Scope is to provide a full-featured Django application that demonstrates implementation of several modern development practices such as:
- Containerization
- Single Page App (SPA) design
- REST API design and documentation
- Log aggregation
- Unit testing
- Continuous integration
- Messaging
- Vertical scalability

Please keep in mind that Scope is a work in progress. You can see an early build of the application API at [scopeapp.online](http://scopeapp.online/docs). A front-end is coming soon.

# Technology used

- **Web app backend**: [Django](https://www.djangoproject.com/), [Django REST Framework](http://www.django-rest-framework.org/), running a [uWSGI](https://github.com/unbit/uwsgi) app server and [Supervisord](http://supervisord.org/) for process control
- **Web server**: [Nginx](https://www.nginx.com/)
- **Front end**: [Angular](https://angular.io/)
- **Version control**: [Git](https://git-scm.com/)
- **CI Server**: [Travis CI](https://travis-ci.org), polling the [develop branch](https://github.com/tckerr/scope) (see our most recent builds [here](https://travis-ci.org/tckerr/scope))
- **Container Software**: [Docker](https://www.docker.com/)
- **Production container orchestration**: [Amazon ECS](https://aws.amazon.com/ecs/)
- **Database**: [MySQL](https://www.mysql.com/) on [Azure Cloud](https://azure.microsoft.com/en-us/)
- **Log aggregation**: [Sentry](https://sentry.io)
