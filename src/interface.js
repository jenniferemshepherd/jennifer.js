console.log("Hello from interface.js")

function addNote() {
  var body = document.getElementById('newNoteBox').innerHTML
  note = new Note(body)
}
