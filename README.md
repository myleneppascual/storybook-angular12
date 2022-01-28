# MyAppAng12

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.14.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
https://storybook.js.org/blog/storybook-for-angular-12/

### 
My learnings:
1. tried in other angular version, so far succeeded on angular 12 
2. all the Input declared in the component, we give values in their corresponding .stories file. it is declared in each state's (or permutation), 'args'. so 'loading' and 'tasks' are declared as input in task-list.component.ts and values are filled in the task-list.stories.ts


## NgXS
Store 
 -The store is a global state manager that dispatches actions your state containers listen to and provides a way to select data slices out from the global state.

Actions
- Actions can either be thought of as a command which should trigger something to happen, or as the resulting event of something that has already happened.
Each action contains a type field which is its unique identifier.

State
-States are classes that define a state container.
- To define a state container, let's create an ES2015 class and decorate it with the State decorator.

Defining Actions
- Our states listen to actions via an @Action decorator. The action decorator accepts an action class or an array of action classes.