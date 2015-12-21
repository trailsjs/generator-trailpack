# generator-trailpack

TrailPack Yeoman Generator.

## Usage
```sh
$ yo trailpack --help

Usage:
  yo trailpack:app [options] 

Options:
  -h,   --help          # Print the generator's options and usage
        --skip-cache    # Do not remember prompt answers             Default: false
        --skip-install  # Do not automatically install dependencies  Default: false
        --skip-update   # Do not check for generator's updates       Default: false

Generators:

  Create New Api
    yo trailpack:api <api-name>

  Create New Model
    yo trailpack:model <model-name>

  Create New Controller
    yo trailpack:controller <controller-name>

  Create New Policy
    yo trailpack:policy <policy-name>

  Create New Service
    yo trailpack:service <service-name>
```

## Contributing
We love contributions! In order to be able to review your code efficiently,
please keep the following in mind:

1. Pull Requests (PRs) must include new and/or updated tests, and all tests [must pass](https://travis-ci.org/jaumard/generator-trailpack).
2. Use `eslint`! See the `eslintConfig` in [package.json](./package.json).
3. Please [reference the relevant issue](https://github.com/blog/1506-closing-issues-via-pull-requests) in your Pull Request.

## License
[MIT](./LICENSE)