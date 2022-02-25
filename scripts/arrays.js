const courses = `[{"Kursnummer":"1","Kurstitel":"Vad är internet?","Kursbeskrivning":"lorem ipsum","Längd":"10 veckor."}, {"Kursnummer":"2","Kurstitel":"C#, Java, C++ och mycket mer","Kursbeskrivning":"lorem ipsum","Längd":"40 veckor."},{"Kursnummer":"3","Kurstitel":"AI - Prata med robotar.","Kursbeskrivning":"lorem ipsum","Längd":"10 veckor."},{"Kursnummer":"4","Kurstitel":"Cloud - Mer än fluffiga moln.","Kursbeskrivning":"lorem ipsum","Längd":"25 veckor."},{"Kursnummer":"5","Kurstitel":"Office 365, grundkurs.","Kursbeskrivning":"lorem ipsum","Längd":"5 veckor."},{"Kursnummer":"6","Kurstitel":"Paint - Din bästa vän.","Kursbeskrivning":"lorem ipsum","Längd":"5 veckor."},{"Kursnummer":"7","Kurstitel":"Office 365, Advanced.","Kursbeskrivning":"lorem ipsum","Längd":"10 veckor."},{"Kursnummer":"8","Kurstitel":"Paint - Din bästa vän, Advanced","Kursbeskrivning":"lorem ipsum","Längd":"10 veckor."}]`;
const courseList = JSON.parse(courses);

const saveBtn = document.getElementById("saveBtn");

const cart = [];

const emptyCartText = document.getElementById("emptyCartText");

function deleteCourseFromCart() {
  for (let i = 0; i < cart.length; i += 1) {
    deleteBtn.onclick = function () {};
  }
}

function updateCart() {
  console.log(cart);
  const coursesInCart = document.getElementById("coursesInCart");
  coursesInCart.innerHTML = "";

  if (cart.length <= 0) {
    emptyCartText.style.display = "block";
    return;
  }

  for (let i = 0; i < cart.length; i++) {
    const course = cart[i];
    console.log(course);
    let wceCourses = `<li id="course${i}">Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`;
    coursesInCart.innerHTML += wceCourses;
    const courseItem = document.getElementById(`course${i}`);
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click", (evt) => {
      cart.splice(i, 1);
      console.log("button test");
      updateCart();
    });
    deleteBtn.innerText = "Delete";
    courseItem.appendChild(deleteBtn);
  }
}

function addCourseToCart(courseNumber) {
  cart.push(courseList[courseNumber]);
  emptyCartText.style.display = "none";
  updateCart();
}

saveBtn.addEventListener("click", () => {
  //Här sparar och lägger vi till den nya kursen i listan i admin modalen.

  let cNumber = document.getElementById("courseNumber").value;
  let cTitel = document.getElementById("courseTitle").value;
  let cDescription = document.getElementById("courseDescription").value;
  let cLength = document.getElementById("courseLength").value;

  const kurs = new Object();
  kurs.Kursnummer = cNumber;
  kurs.Kurstitel = cTitel;
  kurs.Kursbeskrivning = cDescription;
  kurs.Längd = cLength;
  adminModalContainer.classList.remove("show");
  courseList.push(kurs);
  showCoursesInAdminModal();
  printDesignOfCourseCards();
});

function showCoursesInAdminModal() {
  //Den kursen vi la till i save-funktionen visas tack vare den här funktionen.
  let kurser = document.getElementById("existingCourses");
  kurser.innerHTML = "";

  for (let i = 0; i < courseList.length; i++) {
    const course = courseList[i];
    let wceCourses = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`;
    kurser.innerHTML += wceCourses;
  }

  adminDiv.classList.add("show");
}

function printDesignOfCourseCards() {
  const mainDiv = document.getElementById("courses");
  mainDiv.innerHTML = "";
  courseList.forEach((courseItem) => {
    // console.log(courseItem);
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("grid-item");

    const headLine = document.createElement("h1");
    headLine.innerText = courseItem.Kurstitel;

    const p = document.createElement("p");
    p.innerText = courseItem.Kursbeskrivning;

    const buySpan = document.createElement("span");
    buySpan.innerText = "Köp";
    buySpan.classList.add("buy");
    buySpan.setAttribute(
      "onclick",
      `addCourseToCart(${courseItem.Kursnummer})`
    );

    cardDiv.appendChild(headLine);
    cardDiv.appendChild(p);
    cardDiv.appendChild(buySpan);

    mainDiv.appendChild(cardDiv);
  });
}

const addNewCourseBtn = document.getElementById("addNewCourseBtn");
const adminModalContainer = document.getElementById("adminModalContainer");
const closeAdminModalBtn = document.getElementById("closeAdminModalBtn");
const openCartModal = document.getElementById("openCartModal");
const kundvagnDiv = document.getElementById("kundvagn");
const closeCartBtn = document.getElementById("closeCartBtn");
const buyBtn = document.getElementById("buyBtn");
const cartPayedModal = document.getElementById("cartPayedModal");
const closeBtn = document.getElementById("closeBtn");
const openAdminModal = document.getElementById("openAdminModal");
const adminDiv = document.getElementById("admin");
const closeAdminDiv = document.getElementById("closeAdminBtn");

function myBurgerMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

openAdminModal.addEventListener("click", () => {
  showCoursesInAdminModal();
});

closeAdminDiv.addEventListener("click", () => {
  adminDiv.classList.remove("show");
});

addNewCourseBtn.addEventListener("click", () => {
  adminModalContainer.classList.add("show");
});
closeAdminModalBtn.addEventListener("click", () => {
  adminModalContainer.classList.remove("show");
});

openCartModal.addEventListener("click", () => {
  kundvagnDiv.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
  kundvagnDiv.classList.remove("show");
});

buyBtn.addEventListener("click", () => {
  cartPayedModal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  cartPayedModal.classList.remove("show");
  coursesInCart.innerHTML = "Thank you, come again.";
});
