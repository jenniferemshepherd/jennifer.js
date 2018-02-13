console.log("Hello from interface.js")

function addNote() {
  var body = document.getElementById('newNoteBox').innerHTML
  note = new Note(body)
  loadNote(note)
}

function loadNote(note) {
  document.getElementById('noteDisplayBox').innerHTML = note.body
}

document.getElementById('noteSubmit').onclick = function() {
  addNote()
}
