(function testNoteCreation() {

  note = new Note("hello")

 it("Note should have body text passed in as argument", function() {
   return expect.areEqual(note.body, "hello")
  });

})();
