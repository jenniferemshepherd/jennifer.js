(function testNoteCreationWithInterface() {

 it("Displays note on the screen", function() {
   document.getElementById('newNoteBox').textContent = "I am the Edge"
   document.getElementById('noteSubmit').click()
   var content = document.getElementById('noteDisplayBox').value
   return expect.areEqual(content, "I am the Edge")
  });

})();
