(function testNoteCreation() {

  note = new Note("hello")

 it("should have body text passed in as argument to Note", function() {
   return expect.areEqual(note.body, "hello")
  });

})();
