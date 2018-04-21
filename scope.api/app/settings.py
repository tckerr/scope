import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = os.environ.get('SCOPE_SECRET_KEY')
DEBUG = True

ALLOWED_HOSTS = [
    # TODO: restrict to known hosts
    "*"
]
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'diagnostics',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'urls'

TEMPLATES = [
    {
        'BACKEND':  'django.template.backends.django.DjangoTemplates',
        'DIRS':     [],
        'APP_DIRS': True,
        'OPTIONS':  {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'wsgi.application'

SCOPE_DB_HOST = os.environ.get('SCOPE_DB_HOST')
SCOPE_DB_PORT = os.environ.get('SCOPE_DB_PORT')
SCOPE_DB_USER = os.environ.get('SCOPE_DB_USER')
SCOPE_DB_PASS = os.environ.get('SCOPE_DB_PASS')
DATABASES = {
    'default': {
        'ENGINE':   'django.db.backends.mysql',
        'NAME':     'scope',
        'USER':     SCOPE_DB_USER,
        'PASSWORD': SCOPE_DB_PASS,
        'HOST':     SCOPE_DB_HOST,
        'PORT':     SCOPE_DB_PORT,
    }
}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'app/static')

LOGGING = {
    'version':                  1,
    'disable_existing_loggers': False,
    'handlers':                 {
        'file': {
            'level':    'DEBUG',
            'class':    'logging.FileHandler',
            'filename': os.path.join(BASE_DIR, 'django.log'),
        },
    },
    'loggers':                  {
        'django': {
            'handlers':  ['file'],
            'level':     'DEBUG',
            'propagate': True,
        },
    },
}

with open(BASE_DIR + "/app/version.txt", encoding="utf-16") as file:
    APP_VERSION_NUMBER = str(file.readline()).replace("\n", "")