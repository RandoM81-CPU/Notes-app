export default class NotesAPI{
  static getAllNotes(){
    const notes = JSON.parse(localStorage.getItem("notesApp-notes" || "[]"));

    return notes;
  }

  static saveNote(noteToSave){
    const notes = NotesAPI.getAllNotes();
    const existing = notes.find(note => note.id == noteToSave.id);

    if(existing){
      existing.name = noteToSave.name;
      existing.createDate = new Date().toISOString();
      existing.category = noteToSave.category;
      existing.content = noteToSave.content;
      existing.dates = noteToSave.dates;
      existing.isArchived = noteToSave.isArchived;
    }else{
      noteToSave.id = Math.floor(Math.random() * 1000000);

      notes.push(noteToSave);
    }

    localStorage.setItem("notesApp-notes", JSON.stringify(notes));
  }

  static deleteNote(id){
    const notes = NotesAPI.getAllNotes();
    const newNotes = notes.filter(note => note.id != id);

    localStorage.setItem("notesApp-notes", JSON.stringify(notes));
  }
}