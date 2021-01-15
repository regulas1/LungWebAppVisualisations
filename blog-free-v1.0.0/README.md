# Lung App (Vue + Vuetify)

## Project setup
```
1(a) Fork project to a repository in your personal GitHub

1(b) Install node.js & NPM

1(c) Install Vue through their command line interface (CLI)
    Example: npm install -g @vue/cli

1(d). Set up a directory/folder 
    Example: create a new folder in documents called "VueProjects"

2. Use Command Prompt (or Terminal on Mac) to navigate to directory
    Example: cd /Users/johndoe/Documents/VueProjects

3. Clone the current project in your forked repository
    nb. we only want to clone the LASTEST branch, so we use the format "git clone -b <branchName> <repo url>"
    Example: git clone -b step-3 https://github.com/johndoe/LungWebAppVisualisations.git
        This will display message "Cloning into LungWebAppVisualisations..."
        A new folder will be created in the VueProjects folder called "LungWebAppVisualisations"

4. Navigate to the new folder to set the current directory
    Example: cd LungWebAppVisualisations

    Running a status check should confirm that you are on branch "step-3" and everything is up to date
    Example: git status

5. Create a new branch (and move over to it) before starting any edits
    Example: git branch step-4
       then: git checkout step-4
    OR
             git checkout -b step-4
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
