(function testNoteCreationWithInterface() {

 it("Entering text in box & clicking submit should create note with that text", function() {
    document.getElementById('noteBox').innerHTML = "Hello I am a test note"
    document.getElementById('noteSubmit').click()
    return expect.areEqual(note.body, "Hello I am a test note")
  });

})();
