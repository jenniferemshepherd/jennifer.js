  (function testNoteCreation() {
    note = new Note("hello")

   it("Note should have body test passed in as argument", function() {
     expect.areEqual(note.body, "hello")
    });

    it("Note should have body test passed in as argument", function() {
      expect.isTrue(note.body === "hello")
    });

    it("Note should have body test passed in as argument", function() {
      expect.isFalse(note.body === "smello")
    });

  })();

  (function testArray() {
    note = new Note("hello")
    note_array = [note]
    it("Note should be in note_array", function() {
      expect.toInclude(note_array, note)
    });
    
  })();
