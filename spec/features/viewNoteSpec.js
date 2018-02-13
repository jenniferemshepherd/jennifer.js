(function testNoteCreationWithInterface() {

 it("Displays note on the screen", function() {
   document.getElementById('newNoteBox').innerHTML = "I am the Edge"
   document.getElementById('noteSubmit').click()
   var content = document.getElementById('noteDisplayBox').innerHTML
   return expect.areEqual(content, "I am the Edge")
  });

})();
