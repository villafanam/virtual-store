# LAB - Class 38

## Project: Redux - Asynchronous Actions

### Author: Marco Villafana

### Problem Domain  

+ Functionality
  + As a user, I want to interact with live inventory so that I have confidence that the displayed products are in stock.
  + As a user, I want to know to that when I add an item to my cart, that it is removed from inventory so that no other users can purchase it.

### Links and Resources

+ [GitHub Actions ci/cd](https://github.com/villafanam/virtual-store/actions)
+ [GitHub PR](https://github.com/villafanam/virtual-store/pull/6) 
+ Code Sandbox
  + [Lab - 36](https://codesandbox.io/p/github/villafanam/virtual-store/redux?file=README.md&workspace=%257B%2522activeFilepath%2522%253A%2522README.md%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clg1myx5m004t356lk7nf89ed%2522%253A%257B%2522key%2522%253A%2522clg1myx5m004t356lk7nf89ed%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clg1myx5m004u356l2yhn26ha%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clg1myx5m004t356lk7nf89ed%2522%252C%2522spacesOrder%2522%253A%255B%2522clg1myx5m004t356lk7nf89ed%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D) 
  + [Lab 37](https://codesandbox.io/p/github/villafanam/virtual-store/main?file=README.md&workspace=%257B%2522activeFilepath%2522%253A%2522README.md%2522%252C%2522openFiles%2522%253A%255B%2522README.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clg1mypev0015356l0ir14g6c%2522%253A%257B%2522key%2522%253A%2522clg1mypev0015356l0ir14g6c%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clg483egj000x356li4de9pv5%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%252C%2522clg483n3q002h356l9hfnduyz%2522%253A%257B%2522key%2522%253A%2522clg483n3q002h356l9hfnduyz%2522%252C%2522devtools%2522%253A%255B%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A3000%252C%2522key%2522%253A%2522clg483pkc003s356le2o9qf84%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%252C%2522name%2522%253A%2522start%2520Preview%2522%257D%257D%252C%2522currentSpace%2522%253A%2522clg483n3q002h356l9hfnduyz%2522%252C%2522spacesOrder%2522%253A%255B%2522clg1mypev0015356l0ir14g6c%2522%252C%2522clg483n3q002h356l9hfnduyz%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)
  + [Lab 38](https://codesandbox.io/p/github/villafanam/virtual-store/thunk?file=README.md&workspace=%257B%2522activeFilepath%2522%253A%2522README.md%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clg4g82c9004w356l8m62jqn1%2522%253A%257B%2522key%2522%253A%2522clg4g82c9004w356l8m62jqn1%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clg4g82c9004x356lbxj0z6e8%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clg4g82c9004w356l8m62jqn1%2522%252C%2522spacesOrder%2522%253A%255B%2522clg4g82c9004w356l8m62jqn1%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

### Collaborators



### Setup

`npm install`

#### How to initialize/run your application (where applicable)

+ e.g. `npm start`

#### Features / Routes

+ Display a list of our product categories
+ Display a listing of products for each category, when the category is selected
+ From the product listings:
  + Click to view a full detail page about the product
  + Add the product to your shopping cart
+ Shopping cart always visible on screen

#### Tests

+ categories.test.js
  + Initializes initial state
  + Selects category and updates activgeCategory
  + Filter products by category

#### UML

![UML](/assets/lab%2037%20UML.jpg)
