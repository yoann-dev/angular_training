# Create angular project with ngx-rocket

## Generate project
1. Install required tools:
```
npm install -g @ngx-rocket/cli
```

2. Create your application:
```
mkdir my_application_dir
cd my_application_dir
ngx new
```
And reply to asked questions (application name, responsive, GUI framework, authentification).


## Usefull commands
* `npm start` launch Development server on http://localhost:4200/
* `npm run generate -- component <name>` to generate a new component. You can also use `npm run generate -- directive|pipe|service|class|module`.

## References
* [GitHub generator-ngx-rocket](https://github.com/ngx-rocket/generator-ngx-rocket)