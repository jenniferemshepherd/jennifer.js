function TestRunner() {
  this.tests = {};
  this.executedTests = [];
};

  TestRunner.prototype.addTest = function(testName, testFunction) {
    this.tests[testName] = testFunction;
  },

  TestRunner.prototype.printTest = function(testName, testFunction) {
    if (testFunction()) {
      console.log('%c' + testName + ': PASSED', 'color: green')
    } else {
      throw new Error (testName + ': FAILED')
    }
  };

  TestRunner.prototype.runTests = function() {
    Object.keys(this.tests).forEach ((testName) => {
      testFunction = this.tests[testName]
      noteList = new NoteList(); // before
      this.printTest(testName,testFunction);
    });
  };

function it(testName, testFunction) {
  testRunner.addTest(testName, testFunction);
};

var testRunner = new TestRunner();
