## This repo would help learn creating npm packages.

- Create package.json. This is the starting point for the package when installed. Run the below command and answer the questions `npm init` or if you want to create a default package.json then type `npm init -y` and change things required
- Create a functionality for the package. CommonJs is a way to export. If you want to export in es6 way, then a transpiler is required. Current project is uses es6. We have used `.babelrc` file for transpiling. Respective modules installed, check `package.json`.
- It is a best practice, to have test files to make sure the functionality is working. We are using `jest` for the same. We have updated the `script` tags for the same.
- Testing locally : It involves 2 steps
  - npm link : This would create a global npm module of the package locally. This command has to run in the package folder.
  - npm link <package_name> : This would install the package in the consuming folder. Check the package.json, it would have entry of the package name and the local path.
  - Coverage is being recorded. Since it is a part of CI/CD pipeline, not included in the git. Also pre-commit hooks would also be integrated, so the coverage folder is not included in the package.
- `npm login` to login to your npm profile. Once you login. `npm publish`. This would create a package in your profile. Now you could login to your npmjs.com and check under profile section to see if the package is published.

**Note** : The `type: "module"` in package.json

## How to use the module


## Good practices

- Prettier : auto formatting
- es6 : Modern way of writing JS code.

## Links

- https://docs.npmjs.com/creating-a-package-json-file
- npm link : https://docs.npmjs.com/cli/v8/commands/npm-link

## TODOs

- pre-commit hooks
- publishing to npm
- Create a CI/CD pipeline
- Automate your semantic versioning on push of any commit
- Explore private repository.
