(function(exports) {
  
  var Jennifer = function() { 
    this.subject;
  }
  
    Jennifer.prototype= {
      expect: function(subject) {
        this.subject =  subject;
        return this;
      },
  
      toBeTrue: function() {
        return !!this.subject
      },
  
      toBeFalse: function() {
        return !this.subject
      },
  
      toEqual: function(objectToCompare) {
        return this.subject === objectToCompare
      },
  
      toInclude: function(item) {
        return this.subject.includes(item)
      },
  
      toIncludeString: function(stringToFind) {
        return this.subject.search(stringToFind) > -1
      },
  
      // these matchers are used without expect. supply the subject directly
  
      isArray: function(subject) {
        return this.subject instanceof Array
      },
  
      isEmptyArray: function(subject) {
        return this.subject instanceof Array && this.subject.length === 0
      },
  
    }

    exports.jennifer = new Jennifer();
  
  })(this);
  