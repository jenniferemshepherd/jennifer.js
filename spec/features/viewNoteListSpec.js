(function testNoteCreationWithInterface() {

  it("Displays list of notes on the screen", function() {
    addNote("Try finding this test string. This note is over 20 characters!")
    var noteList = document.getElementById("noteList").innerText
    return expect.toIncludeString("Try finding this tes...", noteList)
   });
 
 })();
 