import { Note } from './note.js';

const note = new Note();
// note.addNote({ description: 'Note 1', color: 'green'});
// note.addNote({ description: 'Note 2', color: 'red'});
// console.log(note.getNoteById(1));
// console.log(note.getNoteById(2));
// note.deleteNoteById(2);
// console.log(note.getNoteById(2));
// const newNote = { id: 1, description: 'Note updated', color: 'blue' };
// note.updateNote(newNote);
// console.log(note.getNoteById(1));

const form = document.getElementById('notes-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const descriptionField = document.getElementById("description");
  const colorField = document.getElementById("color");
  
  note.addNote({
    description: descriptionField.value,
    color: colorField.value
  });

  clearForm();
  drawNotes();
});

function clearForm() {
  form.reset();
}

function drawNotes() {
  const noteListView = document.querySelector('.note-list');
  noteListView.innerHTML = '';
  const noteList = note.getNotes();

  noteList.forEach(note => {
    const newNoteView = document.createElement('div');
    newNoteView.style.backgroundColor = note.color;
    const newNoteTitleView = document.createElement('span');
    newNoteTitleView.textContent = note.description;
    newNoteView.append(newNoteTitleView);
    noteListView.append(newNoteView);
  });
}