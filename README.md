# LAB - Class 36

## Project: Application State with Redux

### Author: Marco Villafana

### Problem Domain  

+ Functionality
  + As a user, I want to choose from products in the list and add them to my shopping cart.
  + As a user, I want to see the products that I’ve added to my shopping cart in a growing list on the side of the page”.
  + As a user, I want to change the quantity of items I intend to purchase in the header. i.e. CART (1)
  + As a user, I want to be able to remove an item from my shopping cart.

### Links and Resources

+ [GitHub Actions ci/cd](https://github.com/villafanam/virtual-store/actions)
+ [GitHub PR](https://github.com/villafanam/virtual-store/pull/3) 
+ Code Sandbox
  + [Lab - 36](https://codesandbox.io/p/github/villafanam/virtual-store/redux?file=README.md&workspace=%257B%2522activeFilepath%2522%253A%2522README.md%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clg1myx5m004t356lk7nf89ed%2522%253A%257B%2522key%2522%253A%2522clg1myx5m004t356lk7nf89ed%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clg1myx5m004u356l2yhn26ha%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clg1myx5m004t356lk7nf89ed%2522%252C%2522spacesOrder%2522%253A%255B%2522clg1myx5m004t356lk7nf89ed%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D) 
  + [Lab 37](https://codesandbox.io/p/github/villafanam/virtual-store/combined-reducers?file=README.md&workspace=%257B%2522activeFilepath%2522%253A%2522README.md%2522%252C%2522openFiles%2522%253A%255B%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clg3ak5cw004u356lay8agnoq%2522%253A%257B%2522key%2522%253A%2522clg3ak5cw004u356lay8agnoq%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clg3ak5cw004v356lcoqvudbm%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clg3ak5cw004u356lay8agnoq%2522%252C%2522spacesOrder%2522%253A%255B%2522clg3ak5cw004u356lay8agnoq%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

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

#### Tests

+ categories.test.js
  + Initializes initial state
  + Selects category and updates activgeCategory
  + Filter products by category

#### UML

![UML](/assets/lab%2037%20UML.jpg)
