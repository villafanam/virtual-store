# LAB - Class 36

## Project: Application State with Redux

### Author: Marco Villafana

### Problem Domain  

+ Functionality
  + As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
  + As a user, I want to choose a category and see a list of all available products matching that category.
  + As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence

### Links and Resources

+ [GitHub Actions ci/cd](https://github.com/villafanam/virtual-store/actions)
+ [GitHub PR](https://github.com/villafanam/virtual-store/pull/1) 
+ Code Sandbox
  + [Lab 36](https://codesandbox.io/p/github/villafanam/virtual-store/redux?file=README.md&workspace=%257B%2522activeFilepath%2522%253A%2522README.md%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clg1myx5m004t356lk7nf89ed%2522%253A%257B%2522key%2522%253A%2522clg1myx5m004t356lk7nf89ed%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clg1myx5m004u356l2yhn26ha%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clg1myx5m004t356lk7nf89ed%2522%252C%2522spacesOrder%2522%253A%255B%2522clg1myx5m004t356lk7nf89ed%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D) 

### Collaborators

+ Joseph Davitt

### Setup

`npm install`

#### How to initialize/run your application (where applicable)

+ e.g. `npm start`

#### Features / Routes

+ Display a list of our product categories
+ Display a listing of products for each category, when the category is selected
+ From the product listings:
  + Click to view a full detail page about the product

#### Tests

+ categories.test.js
  + Initializes initial state
  + Selects category and updates activgeCategory
  + Filter products by category

#### UML

Link to an image of the UML for your application and response to events
