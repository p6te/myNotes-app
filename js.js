const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteBtn = document.querySelector(".delete-note");
const deleteAllBtn = document.querySelector(".delete-all");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const error = document.querySelector(".error");

let selectedValue;
let cardID = 0;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textArea.value = "";
  category.selectedIndex = 0;
};

const addNote = () => {
  if (
    textArea.value !== "" &&
    category.options[category.selectedIndex].value != "0"
  ) {
    createNote();
    error.style.visibility = "hidden";
  } else {
    error.style.visibility = "visible";
  }
};

const createNote = () => {
  const newNote = document.createElement("div");
  newNote.classList.add("note");
  newNote.setAttribute("id", cardID);
  newNote.innerHTML = `
      <div class="note-header">
          <h3 class="note-title"> ${selectedValue}</h3>
          <button class="delete-note" onclick="removeOne(${cardID})">
            <i class="fas fa-times icon"></i>
          </button>
        </div>
        <div class="note-body">
            ${textArea.value}
        </div>
      `;
  cardID++;
  noteArea.appendChild(newNote);

  closePanel();
  checkColor(newNote);
};

selectValue = () => {
  selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
  switch (selectedValue) {
    case "Shopping":
      note.style.backgroundColor = "#e0f0ea";
      break;
    case "Work":
      note.style.backgroundColor = "#edd2cb";
      break;
    case "Sport":
      note.style.backgroundColor = "#f1e8e6";
      break;
    case "Hobby":
      note.style.backgroundColor = "#e1e8ff";
      break;
    case "Travel":
      note.style.backgroundColor = "#81e9e6";
      break;

    case "Others":
      note.style.backgroundColor = "#FEFCBF";
      break;
  }
};

const removeOne = (id) => {
  const noteToDelete = document.getElementById(id);
  noteArea.removeChild(noteToDelete);
};
const removeAll = () => {
  noteArea.innerHTML = "";
  cardID = 0;
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", removeAll);
