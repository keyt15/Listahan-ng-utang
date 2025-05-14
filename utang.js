document.addEventListener("DOMContentLoaded", function() {
  const saveBtn = document.getElementById("saveBtn");
  const nameInput = document.getElementById("nameInput");
  const utangInput = document.getElementById("utangInput");
  const nakautangs = document.getElementById("nakautangs");
  const errorMessage = document.getElementById("errorMessage");
  
  saveBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    const utang = utangInput.value.trim();
    if (name === "" || utang === "") {
      errorMessage.style.display = "block";
      return;
    }
    errorMessage.style.display = "none";
    const li = document.createElement("li");
    li.innerHTML = `${name} - &#8369;${utang} <div class="action-buttons"><span class="edit">Edit</span> <span class="delete">Delete</span></div>`;
    nakautangs.appendChild(li);
    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", function() {
      li.remove();
    });
    const editBtn = li.querySelector(".edit");
    editBtn.addEventListener("click", function() {
      nameInput.value = name;
      utangInput.value = utang;
      li.remove();
    });
    nameInput.value = "";
    utangInput.value = "";
  });
});