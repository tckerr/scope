$version_text_path = "$($PSScriptRoot)/../scope.api/app/version.txt"
$current_version = [System.IO.File]::ReadAllText($version_text_path)
$a,$b,$c = $current_version.split('.')
$new_minor_version = [int]$c + 1
echo "$($a).$($b).$($new_minor_version)" > $version_text_path

pushd $PSScriptRoot/../scope.app/
ng build --env=prod
rm -r -fo "$($PSScriptRoot)\..\scope.api\app\static\dist\"
cp -r dist "$($PSScriptRoot)\..\scope.api\app\static\dist\"
cd $PSScriptRoot/../scope.api/
docker build -t python-gs $PSScriptRoot/../scope.api
popd