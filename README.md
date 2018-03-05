<h1 align="center"> jennifer.js </h1>

<h2 align="center"> Behaviour driven testing framework for Javascript </h2>

<h3 align="center"> <a href="https://github.com/domvernon">domvernon</a> | <a href="https://github.com/edpe">edpe</a> | <a href="https://github.com/jenniferemshepherd">jenniferemshepherd</a> | <a href="https://github.com/ealitten">ealitten</a> </h3>

<h4 align="center"> <a href="#introduction">INTRO</a> | <a href="#usage">USAGE</a> </h4>

### Introduction

To learn about how testing frameworks do the things they do, jennifer.js was created. It was heavily inspired by Jasmine and RSpec to use familiar BDD syntax. At a basic level testing frameworks simply compare objects. What this framework  and other does, is to abstract that into a useful language syntax and structure, so that this can be done more efficiently. We started by having some basic 'matcher' functions that took two arguments for the things it was comparing. It would return true or false depending on the matcher. This was then abstracted so that each test could be written inside an `it` function. This could then be used to name a function, and log meaningful messages to the console.

At this point, each individual test had to be run manually, so the test files were converted to an immediately-invoked function expression. Jennifer was then refactored so that the `expect` functions took an argument but returned `self` to be able to be chained to a matcher. This improved the testing syntax. A test runner was introduced to gather up all the tests and log them quite nicely. This also had the benefit of not stopping other tests from running if there was a test failure. Finally, Jennifer was then refactored to take advantage os ES6 language features to become more readable an maintainable.

### Usage

*All code snippets are found in the examples folder for a 'Notes' app that was built through behaviour/test driven development and this testing framework*

#### End result
Open up `jennifer.js/example/index.html` to see the finished app. Open your browsers developer console to see the tests have been run.

![test examples](/example/img/example.png)

#### Writing tests
Use the following syntax inside a test file (no special naming of the file required):

```javascript
(function featureOrClassName() {

  it("Description of the test", function() {
    jennifer.expects(subject).MATCHER(expectation)
  });

})();
```

Note how this is an immediate-invoked function expression. This adds itself to the test runner.

#### Matchers

```javascript
toBeTrue()
toBeFalse()
toEqual(objectToCompare)
toInclude(item)
toIncludeString(stringToFind)
toBeArray()
toBeEmptyArray()
```

#### Before Block

See below for an example but Jennifer can execute things before each test. When you come to run your tests, pass an optional argument to `runTests()`.

#### Running tests

Include the following in some sort of html file.

```html5
  <!-- load dependencies -->
  <script src="src/noteList.js"></script>
  <script src="src/interface.js"></script>

  <!-- load testing framework -->
  <script src="../jennifer.js"></script>

  <!-- tests -->
  <script src="spec/noteSpec.js"></script>
  <script src="spec/features/viewNoteListSpec.js"></script>
  <script src="spec/features/clickableNoteListSpec.js"></script>
```
Jennifer needs the greenlight to start testing. Either place the following inside the spec runner inside some `<script>` tags  to run the test automatically, or type it into the console. Note the optional argument in `runTests()`, this is a 'before block' and will execute before each test.

```javascript
jennifer.runTests(function () { noteList = new NoteList() });
```
