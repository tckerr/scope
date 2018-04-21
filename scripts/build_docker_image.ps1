$version_text_path = "$($PSScriptRoot)/../scope.api/app/version.txt"
$current_version = [System.IO.File]::ReadAllText($version_text_path)
$a,$b,$c = $current_version.split('.')
$new_minor_version = [int]$c + 1
echo "$($a).$($b).$($new_minor_version)" > $version_text_path

docker build -t python-gs scope.api