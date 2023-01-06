# GitHub Pages

It is easiest to setup this site using GitHub pages via GitHub workflows.

Example:
```yml
name: Deploy GitHub Pages

on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [16.x]

    steps:
    - uses: actions/checkout@v2
      with:
          fetch-depth: 0

    - name: Cache multiple paths
      uses: actions/cache@v2
      env:
        cache-name: cache-node-modules
      with:
        path: ~/.npm
        key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
        restore-keys: |
          ${{ runner.os }}-build-${{ env.cache-name }}-
          ${{ runner.os }}-build-
          ${{ runner.os }}-

    - name: Use Node.js ${{ matrix.node }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node }}

    - name: Install Dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Build GitHub Pages
      run: npm run generate:gh-pages

    - name: Deploy GitHub Pages
      uses: JamesIves/github-pages-deploy-action@v4.3.0
      with:
        branch: gh-pages # The branch the action should deploy to.
        folder: docs # The folder the action should deploy.
```

In this example we are assuming that the `generate:gh-pages` targets a node script that executes a configured `StaticDocs` instance which then uses the `generate` method to generate the HTML files necessary for the site. This is just an example, considering the following links for more information on how to integrate this into your projects workflow:

- [GitHub workflows](https://docs.github.com/en/actions/using-workflows)
- [GitHub pages deploy action](https://github.com/JamesIves/github-pages-deploy-action)