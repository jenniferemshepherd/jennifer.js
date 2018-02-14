function loadNote(note) {
  document.getElementById('noteDisplayBox').innerHTML = note.body
}

function addNote() {
  var body = document.getElementById('newNoteBox').value
  note = new Note(body)
  loadNote(note)
}

document.getElementById('noteSubmit').onclick = function() {
  addNote()
}
