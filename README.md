# Isolate Redux Enviroment

### Motivation
At some point I noticed that we at the front end making a big salad every time we touched a project. There are many libraries, patterns and concepts that we have to apply and or these reasons we usually tend to have a complex view of our application, and this can lead us to duplication of code, poor quality and/or efficiency code and often poorly done architecture. Isolating the redux environment, is part of an idea called LUS, you can know more [here](https://github.com/iclinic/morphine)

### Scripts
We are using [Yarn](https://yarnpkg.com/), click on link and install it before anything!  

| yarn ...  | description  |
|    :-:    |     :--      |
| dev       |  run webpack on --watch mode |
| build     |  generate you **ire** build into dist   |
| test      |  run test in watch mode (for TDD)   |
| test:cov  |  run tests with coverage |
| lint      |  pass lint through your src files with AirBnb lint |
| lint:fix      |  fix some of the lint problems |
| coveralls  | send coverage data for coveralls  |

### Organization
I resolve to divide the code by modules, a vice that I bring after programming sometime in python. Inside `src` I habe 3 modules: **common**, **apiexample** and **counter**, everyone have yours models, actions, reducer and constants. I like to use `index.js` inside modules to export the parts :D

## Good things

#### Api Middleware
Project have a middleware (`common/middleware`), that called **apiMiddleware**. It verify the action to find a property called `client`, client need be a **mappersmith** promisse. Diferent from another actions, this actions nedd **3 types** (doing, done, fail), that will be executed in every part of request. [Example Here]()

#### reducerFunction
I create a function that use a `Map<string, reducer>` to get dinamically the reducer called on action without **switch**. For this your action need be the name of the method. Example: I want to called my **doThisForMe** reducer, so the type of my action will be **doThisForMe**, and yes you cando do something like that:   
```javascript
export const DO_THIS_FOR_ME = "doThisForMe"
``````
