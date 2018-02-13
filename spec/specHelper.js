var expect = {

  isTrue: function(expectation) {
    return expectation
  },

  isFalse: function(expectation) {
    return !expectation
  },

  areEqual: function(object1, object2) {
    return object1 === object2
  },

  toInclude: function(container, item) {
    return container.includes(item)
  }

}

var it = function(testName, test) {
  result = test
  if (result) {
    console.log('%c' + testName + ': PASSED', 'color: green')
  } else {
    console.log('%c' + 'Expectation failed: ' + testName + 'FAILED', 'color: red')
  }
}