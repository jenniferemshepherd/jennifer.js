(function(exports) {

  var Jennifer = function() {
    this.subject;
    this.tests = [];
    this.executedTests = [];
  }

    Jennifer.prototype= {

      assert: function(assertion, errorMessage) {
        var testObject = {name: testName}
        try {
          assertion ? testObject.result = "Passed" : throw new Error(errorMessage)
        } catch (e) {
          testObject.result = "Failed"
          testObject.error = e
        } finally {
          this.executedTests.push(testObject)
        }
      },

      expect: function(subject) {
        this.subject =  subject;
        return this;
      },

      runTests: function() {
        // Object.keys(this.tests).forEach ((testName) => {
        //   testFunction = this.tests[testName]
        //   noteList = new NoteList(); // before
        //   this.printTest(testName,testFunction);
        // });

        this.tests.forEach(test => {
          test.test()
          this.executedTests[this.executedTests.length - 1].name = test.name
        })

        this.printTests()
      },

      printTests: function() {
        this.executedTests.forEach(test => {
          console.log(`${test.name}: ${test.result}`);
          if (test.error) {
            console.log(test.error.message);
            console.log(test.error.stack);
          }
        })
      },

      toBeTrue: function() {
        var errorMessage = `Expected ${this.subject} to be true.`
        assert(Boolean(this.subject), errorMessage)
      },

      toBeFalse: function() {
        var errorMessage = `Expected ${this.subject} to be false.`
        assert(!this.subject , errorMessage)
      },

      toEqual: function(objectToCompare) {
        var errorMessage = `Expected ${this.subject} to equal ${objectToCompare}.`
        assert(this.subject === objectToCompare, errorMessage)
      },

      toInclude: function(item) {
        var errorMessage = `Expected ${this.subject} to include ${item}.`
        assert(this.subject.includes(item), errorMessage)
      },

      toIncludeString: function(stringToFind) {
        var errorMessage = `Expected ${this.subject} to contain string '${stringToFind}'.`
        assert(this.subject.search(stringToFind) > -1, errorMessage)
      },

      // these matchers are used without expect. supply the subject directly

      isArray: function(subject) {
        var errorMessage = `Expected ${this.subject} to be an array.`
        assert(this.subject instanceof Array, errorMessage)
      },

      isEmptyArray: function(subject) {
        var errorMessage = `Expected ${this.subject} to be an empty array.`
        assert((this.subject instanceof Array && this.subject.length === 0), errorMessage)
      },

    }

    function addTest(testName, testFunction) {
      jennifer.tests.push({name: testName, test: testFunction});
    }

    exports.jennifer = new Jennifer();

    exports.addTest = it;

  })(this);
