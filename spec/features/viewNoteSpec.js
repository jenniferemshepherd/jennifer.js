(function testNoteCreationWithInterface() {

 it("Displays note on the screen", function() {
   var note = new Note("I am the Edge")
   var content = document.getElementById('noteDisplayBox')
   return expect.areEqual(content, "I am the Edge")
  });

})();
