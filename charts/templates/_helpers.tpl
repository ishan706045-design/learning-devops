{{- define "my-express-app.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "my-express-app.name" -}}
{{- .Chart.Name -}}
{{- end -}}
