(function testNoteCreationWithInterface() {

 it("Entering text in box & clicking submit should create note with that text", function() {
    document.getElementById('newNoteBox').textContent = "Hello I am a test note"
    document.getElementById('noteSubmit').click()
    return expect.areEqual(noteList.getNotes()[0].getBody(), "Hello I am a test note")
  });

})();
