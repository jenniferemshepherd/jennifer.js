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
  },

  isArray: function(object) {
    return object instanceof Array
  },

  isEmptyArray: function(object) {
    return object instanceof Array && object.length === 0
  }

}

var it = function(testName, test) {
  if (test()) {
    console.log('%c' + testName + ': PASSED', 'color: green')
  }  else {
     throw new Error (testName + ': FAILED')
  }
}
