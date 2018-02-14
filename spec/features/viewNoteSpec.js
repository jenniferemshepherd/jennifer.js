(function testNoteCreationWithInterface() {

 it("Displays note on the screen", function() {
   loadNote(new Note("I am the Edge"))
   var content = document.getElementById('noteDisplayBox').value
   return expect.areEqual(content, "I am the Edge")
  });

})();
