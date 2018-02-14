// stuff that runs immediately on page load
noteList = new NoteList()

// stuff that listens for events
document.getElementById('noteSubmit').onclick = function() {
  addNote()
}

// functions which can be called
function loadNote(note) {
  document.getElementById('noteDisplayBox').innerHTML = note.getBody()
}

function addNote(body = document.getElementById('newNoteBox').value) {
  noteList.addNote( new Note(body) )
  loadNoteList()
}

function loadNoteList() {

  var output = "<ul id='noteList'>"

  if (noteList.getNotes().length > 0) {
    noteList.getNotes().forEach( note => {
      output += "<li>" + note.getBody().slice(0,20) + "...</li>"
    });
  }

  output += "</ul>"

  document.getElementById('noteListDisplayArea').innerHTML = output

}
