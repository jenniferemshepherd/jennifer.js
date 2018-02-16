(function testNoteCreationWithInterface() {

  it("should create a note with that text after entering text in box & clicking submit", function() {
    document.getElementById('newNoteBox').textContent = "Hello I am a test note"
    document.getElementById('noteSubmit').click()
    var firstNoteContents = noteList.getNotes()[0].getBody()
    jennifer.expect(firstNoteContents).toEqual("Hello I am a test note")
  });

})();
