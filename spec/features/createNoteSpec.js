(function testNoteCreationWithInterface() {

 it("should create a note with that text after entering text in box & clicking submit", function() {
    document.getElementById('newNoteBox').textContent = "Hello I am a test note"
    document.getElementById('noteSubmit').click()
    return expect.areEqual(noteList.getNotes()[0].getBody(), "Hello I am a test note")
  });

})();
