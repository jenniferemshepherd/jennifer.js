(function testClickableNoteList() {

 it("clicking on a note displays it in the display box", function() {
   document.getElementById('newNoteBox').textContent = "This is a test note designed to be longer than 20 characters"
   document.getElementById('noteSubmit').click()
   document.getElementById('note0').click()
   var content = document.getElementById('noteDisplayBox').value
   return expect.areEqual(content, "This is a test note designed to be longer than 20 characters")
  });

})();
