(function testNoteStorage() {

  noteList = new NoteList()

  jennifer.it("should create a NoteList with an empty array of notes", function() {
   return jennifer.expect(noteList.notes).isEmptyArray()
  });

  noteList = new NoteList() //isolates tests

  jennifer.it("can add a note to NoteList", function() {
    var mockNote = {
      body: "I am note"
    }
    noteList.addNote(mockNote)
    return jennifer.expect(noteList.getNotes()).toInclude(mockNote)
  });

  noteList = new NoteList()

  jennifer.it("can return notes", function() {
    var mockNote1 = {}
    var mockNote2 = {}
    noteList.addNote(mockNote1)
    noteList.addNote(mockNote2)
    return jennifer.expect(noteList.getNotes()).toInclude(mockNote2)
  });

})();
