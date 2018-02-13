console.log("Hello from interface.js")

function addNote() {
  var body = document.getElementById('noteBox').innerHTML
  note = new Note(body)
}
