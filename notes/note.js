export class Note {
  constructor() {
    this.notes = [];
    this.id = 0;
  }

  addNote(note) {
    if (!note) return;

    note.id = ++this.id;
    this.notes.push(note);
  }

  getNoteById(id) {
    if (!id) return;

    return this.notes.find((n) => n.id === id);
  }

  deleteNoteById(id) {
    if (!id) return;

    this.notes = this.notes.filter((n) => n.id !== id);
  }

  updateNote(note) {
    if (!note) return;

    const nodeToUpdate = this.getNoteById(note.id);
    nodeToUpdate.description = note.description;
    nodeToUpdate.color = note.color;
  }

  getNotes() {
    return this.notes;
  }
}
