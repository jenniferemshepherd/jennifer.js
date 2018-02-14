(function testNoteStorage() {

  noteList = new NoteList()

 it("NoteList should be created with an empty array of notes", function() {
   return expect.isEmptyArray(noteList.notes)
  });

})();
