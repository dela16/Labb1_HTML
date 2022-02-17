
const courseBtn = document.getElementById("courseBtn"); //const variabelnamn = ID.
const adminModalContainer = document.getElementById("adminModalContainer");
const saveBtn = document.getElementById("saveBtn");

courseBtn.addEventListener("click", () => {
   adminModalContainer.classList.add("show");
});

saveBtn.addEventListener("click", () => {
    adminModalContainer.classList.remove("show");
});