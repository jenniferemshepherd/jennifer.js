function NoteList() {

  this.notes = []

}

NoteList.prototype = {

  addNote: function(note) {
    this.note.push(note)
  },

  getNotes: function() {
    return this.notes
  }


}
