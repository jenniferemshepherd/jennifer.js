(function testNoteStorage() {

  noteListSpec = []

 var test1 = function() {
   it("should create a NoteList with an empty array of notes", function() {
   return expect.isEmptyArray(noteList.notes)
 });
};

  var test2 = function() {
    it("can add a note to NoteList", function() {
    var mockNote = {}
    noteList.addNote(mockNote)
    return expect.toInclude(noteList.notes, mockNote)
   });
 };

  var test3 = function() { it("can return notes", function() {
     var mockNote1 = {}
     var mockNote2 = {}
     noteList.addNote(mockNote1)
     noteList.addNote(mockNote2)
     return expect.toInclude(noteList.getNotes(), mockNote2)
    });
  };

noteListSpec.push(test1)
noteListSpec.push(test2)
noteListSpec.push(test3)

})();

noteListSpec.forEach(test => {
  noteList = new NoteList()
  test();
});
