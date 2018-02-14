(function testNoteStorage() {

  noteList = new NoteList()

 it("NoteList should be created with an empty array of notes", function() {
   return expect.isEmptyArray(noteList.notes)
  });

  noteList = new NoteList() //isolates tests

  it("NoteList can add a note", function() {
    var mockNote = {}
    noteList.addNote(mockNote)
    return expect.toInclude(noteList.notes, mockNote)
   });

   noteList = new NoteList()

   it("NoteList can return notes", function() {
     var mockNote1 = {}
     var mockNote2 = {}
     noteList.addNote(mockNote1)
     noteList.addNote(mockNote2)
     return expect.toInclude(noteList.getNotes(), mockNote2)
    });



})();
