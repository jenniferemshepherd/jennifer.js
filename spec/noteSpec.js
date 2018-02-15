(function testNoteCreation() {

  note = new Note("hello")

 jennifer.it("should have body text passed in as argument to Note", function() {
   return jennifer.expect(note.body).toEqual("hello")
  });

})();
