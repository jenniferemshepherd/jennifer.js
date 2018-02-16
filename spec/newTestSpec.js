(function testNoteCreation() {

  it("should have body text passed in as argument to Note", function() {
    var note = new Note("hello")
    jennifer.expect(note.body).toEqual("hello")
  });

})();
