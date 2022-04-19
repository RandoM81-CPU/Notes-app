import NotesView from "./NotesView.js"

const app = document.getElementById("app");
const view = new NotesView(app, {
  onNoteAdd(){

  },
  createNoteElement(){
    const tbody = document.querySelector("#notes-data");

    tbody.innerHTML = `
      <tr>
      <td class="dsg"><input name="name" type='text'></td>
      <td>${new Date().toISOString()}</td>
      <td>
        <select id='category'>
          <option value='1'>Task</option>
          <option value='2'>Random Thought</option>
          <option value='3'>Idea</option>
        </select>
      </td>
      <td><input name="content" type="text"></td>
      <td><input name="dates" type="text"></td>
      <td class="dsg">
        <img width="20px" height="20px" src="resources\\pencil.svg" class="dsg" alt="Pencil">
        <img width="20px" height="20px" src="resources\\archive.svg" class="dsg" alt="Archive">
        <img width="20px" height="20px" src="resources\\trashcan.svg" class="dsg" alt="Pencil">
      </td>
      </tr>`;

    return {
      name: tbody.forms.name,
      date: new Date().toISOString(),
      category: tbody.forms.category,
      content: tbody.forms.content,
      dates: tbody.forms.dates
    };
  },
});