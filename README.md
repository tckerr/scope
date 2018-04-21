# Introduction
The purpose of the Scope project is to provide a full-featured Django application that demonstrates implementation of several modern development practices such as:
- Containerization
- Single Page App (SPA) design
- REST API design and documentation
- Log aggregation
- Unit testing
- Continuous integration
- Messaging
- Vertical Scalability

Please keep in mind that Scope is a work in progress!

# Technology used

- **Web app backend**: [Django](https://www.djangoproject.com/), [Django REST Framework](http://www.django-rest-framework.org/), running a [uWSGI](https://github.com/unbit/uwsgi) app server and [Supervisord](http://supervisord.org/) for process control
- **Web server**: [Nginx](https://www.nginx.com/)
- **Front end**: [Angular](https://angular.io/)
- **CI Server**: [Travis CI](https://travis-ci.org) (see the most recent builds [here](https://travis-ci.org/tckerr/scope))
- **Container Software**: [Docker](https://www.docker.com/)
- **Production container orchestration**: [Amazon ECS](https://aws.amazon.com/ecs/)
- **Database**: [MySQL](https://www.mysql.com/) on [Azure Cloud](https://azure.microsoft.com/en-us/)
