&"$($PSScriptRoot)/set_env_variables.ps1"
pushd $PSScriptRoot/../scope.api/app
python manage.py makemigrations
python manage.py migrate
popd