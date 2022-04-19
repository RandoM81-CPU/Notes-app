export default class NotesView{
  constructor(root, { onNoteAdd, onNoteDelete, onNoteEdit, createNoteElement } = {}) {
    this.root = root;
    this.onNoteAdd = onNoteAdd;
    this.onNoteDelete = onNoteDelete;
    this.onNoteEdit = onNoteEdit;
    this.createNoteElement = createNoteElement
    this.root.innerHTML = `
      <table class="notes">
          <thead>
              <tr>
                  <td>Name</td>
                  <td>Created</td>
                  <td>Category</td>
                  <td>Content</td>
                  <td>Dates</td>
                  <td></td>
              </tr>
          </thead>
          <tbody id="notes-data"> 
          </tbody>
      </table>
      <button class="btnAdd">Create Note</button>
      <br>
      <table class="categories">
          <thead>
          <tr>
              <td>Note Category</td>
              <td></td>
              <td>Active</td>
              <td>Archived</td>
              <td></td>
              <td></td>
          </tr>
          </thead>
          <tbody>
          </tbody>
      </table>
    `;

    const btnAddNote = this.root.querySelector(".btnAdd");

    btnAddNote.addEventListener("click", () => {
      this.createNoteElement();
    });

    this.root.addEventListener("click", () => {
      this.onNoteAdd();
    })
  }
}