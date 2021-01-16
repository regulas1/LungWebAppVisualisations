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

4. Navigate to the folder called "blog-free-v1.0.0" which is located within the new folder "LungWebAppVisualisations"git
    Example: cd LungWebAppVisualisations

    Running a status check should confirm that you are on branch "step-3" and everything is up to date
    Example: git status

5. Create a new branch (and move over to it) before starting any edits
    Example: git branch step-4
       then: git checkout step-4
    OR
             git checkout -b step-4
```

### Compile
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Project Outline
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
    It currently contains links to the lung model scripts.
```
### @/src
```
@/assets
    Contains images used in the webpage

@/components
    Contains all Vue components - think of variables. Components are passed to App.vue, which is then passed main.js to display in the browser.
    If we were to create a new HelloWorld project from scratch, Vue would automatically create a HelloWorld component.

    ./base
        ./Btn.vue uses <v-btn> 
            export props:{} & computed:{} with name="baseBtn"
        ./Card.vue uses <v-card> 
            export with name="baseCard"
        ./Subheading.vue uses <h2> with class="subheading text-uppercase font-weight-medium mb-3"
            export with name="baseSubheading"

    ./home
        ./Articles.vue uses <section> with id="feed" 
            export components:{} with name="HomeAbout"
                components:{} import Feed:()
        ./Banner.vue uses <base-card> 
            export with name="HomeBanner"
        ./Subscribe.vue uses <v-container> with id="subscribe" 
            export name="HomeSubscribe"

    ./AppNavigation.vue uses <span> with <v-navigation-drawer> & <v-toolbar>
        export data(){} with name="AppNavigation"
        Includes <style>

    ./Feed.vue uses <v-container>
        import utilities from vuex
        export components:{} & data:() & computed:{} with name="Feed"

    ./FeedCard.vue uses <v-col>
        export props:{} with name "FeedCard"

    


    





```