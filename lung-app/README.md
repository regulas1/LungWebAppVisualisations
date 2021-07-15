# lung-app

## Project setup
```
1(a) Fork project to a repository in your personal GitHub

 (b) Install node.js & NPM through Command Prompt (or Terminal on Mac)

 (e) Set up a directory/folder 
     Example: create a new folder in documents called "VueProjects"

2. Use Command Prompt (or Terminal on Mac) to navigate to directory
    Example: cd /Users/johndoe/Documents/VueProjects

3. Clone the current project in your forked repository
    This will display message "Cloning into LungWebAppVisualisations..."
    A new folder will be created in the VueProjects folder called "LungWebAppVisualisations"
    nb. if wanting to only want to clone the LASTEST branch, use the format "git clone -b <branchName> <repo url>"
    Example: git clone -b vue-13-copy https://github.com/johndoe/LungWebAppVisualisations.git
        

4. Navigate to the folder called "LungWebAppVisualisations" and check what branches are available 
    Example: cd LungWebAppVisualisations
             git branch -a 
             nb. including "-a" retrieves the remote branches too

    Running a status check should confirm that you are on branch "vue-13-copy" and everything is up to date
    Example: git status

5. Create a new branch (and move over to it) before starting any edits
    Example: git branch vue-10
       then: git checkout vue-10
    OR
             git checkout -b vue-10

6. Installations required to run in local browser:
    (a) Install Vue through its command line interface (CLI)
        Example: npm install -g @vue/cli

    (b) Install Vuetify
        Example: vue add vuetify

```

### Compile
```
yarn serve
OR
npm run serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project outline
```
There are 2 important folders in Vue projects:
1. public
2. src

These folders are where user editing occurs.
```

### @/public
```
index.html
    Vue creates index.html in the public folder by default.
    It contians the Vue attribute (directive) connected to the overall App.vue component.
```

### @/src
```
@/components
    Contains only .vue files. Each component has a specific function within the app and can be re-used multiple times on the page.
    Components are passed to App.vue, which is then passed to main.js to display in the browser.
    If we were to create a new HelloWorld project from scratch, Vue would automatically create a HelloWorld component.

    ./base
        Base components are re-used multiple times throughout the app. They are included as a plugin so that they do not need to be imported in the script each time they need to be used.
        Examples: buttons, banners

    ./home
        The components that are only for use on the default homepage

    ./AppNavigation.vue
        A navigation configuration created using Vuetify

@/Model
    Contains three.js aspects of the app.
    Further split into two sub-folders

    ./components
        The fixed components in a scene (including the scene itself)
        Examples: camera, object, surfaces (in a separate folder)

    ./systems
        Dynamic components of a scene that must react to user input
        Examples: controls, renderer, resizer

@/views
    Contains separate Vue components corresponding to each different page in the lung app.
    (Home, Breathing, Asthma, Smoking, Disease)

./App.vue uses <v-app> with id="app"
    Imports AppNavigation.vue so it can be exported and used as a directive in the template.

@/store
    ./index.js contains Vuex store setup 
    Deals with instantaneous current state resulting from user interaction

./main.js
    Where Vue instance is created & mounted
    import main <App /> component from App.vue file (& all other main sources)
    Creates new Vue instance with imported sources

./vue.config.js
    Needed for navigation between pages
```