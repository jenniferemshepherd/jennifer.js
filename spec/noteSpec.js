  (function testNoteCreation() {

    note = new Note("hello")

   it("Note should have body text passed in as argument", function() {
     return expect.areEqual(note.body, "hello")
    });

    it("Note should have body text passed in as argument", function() {
      return expect.isTrue(note.body === "hello")
    });

    it("Note should have body text passed in as argument", function() {
      note = new Note("smello")
      return expect.isFalse(note.body === "hello")
    });

  })();

  // (function testArray() {
  //   note = new Note("hello")
  //   note_array = [note]
  //   it("Note should be in note_array", function() {
  //     expect.toInclude(note_array, note)
  //   });

  // })();
