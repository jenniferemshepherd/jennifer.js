(function testNoteStorage() {

  it("should create a NoteList with an empty array of notes", function() {
    jennifer.expect.isEmptyArray(noteList.notes)
  });

  it("can add a note to NoteList", function() {
    var mockNote = {}
    noteList.addNote(mockNote)
    jennifer.expect.toInclude(noteList.notes, mockNote)
   });

  it("can return notes", function() {
    var mockNote1 = {}
    var mockNote2 = {}
    noteList.addNote(mockNote1)
    noteList.addNote(mockNote2)
    jennifer.expect(noteList.getNotes()).toInclude(mockNote2)
  });

})();