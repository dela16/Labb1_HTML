function myBurgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";         
    } else {
        x.style.display = "block"; 
    }
}

// const chosenCourses = [];

// function buyPaintFunction() {
//     chosenCourses.push(cartItem)//Behöver jag en const för de olika kurserna? jag behöver sätta något i min push.
//     for (let i = 0; i < coursesInCart.length; i ++){
//         const cartitem = courseList[i];
//         let cartItem = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`;
//         document.getElementById("coursesInCart").innerHTML += cartitem;
//     }
//     const courseList = JSON.stringify(chosenCourses);

//Öppna och lägg till kurser - admin. 
//Knapparna i topnav.

const openAdminModal = document.getElementById("openAdminModal");
const adminDiv = document.getElementById("admin");
const closeAdminDiv = document.getElementById("closeAdminBtn");

openAdminModal.addEventListener("click", () => {
    getCourses(); 
});


function getCourses() {
    let kurser = document.getElementById("existingCourses");
    kurser.innerHTML = ""; 
    
   for (let i = 0; i < courseList.length; i++) {
      const course = courseList[i];
      let wceCourses = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`;
      kurser.innerHTML += wceCourses;
    };
    
    adminDiv.classList.add("show");
}



closeAdminDiv.addEventListener("click", () => {
    adminDiv.classList.remove("show");
});
//ALLT OVAN FUNKAR I DEN HÄR ORDNINGEN!

const addNewCourseBtn = document.getElementById("addNewCourseBtn");
const adminModalContainer = document.getElementById("adminModalContainer");
const closeAdminModalBtn = document.getElementById("closeAdminModalBtn"); 

addNewCourseBtn.addEventListener("click", () => {
    adminModalContainer.classList.add("show");
});
closeAdminModalBtn.addEventListener("click", () => {
    adminModalContainer.classList.remove("show");
});


const openCartModal = document.getElementById("openCartModal");
const kundvagnDiv = document.getElementById("kundvagn");
const closeCartBtn = document.getElementById("closeCartBtn"); 

openCartModal.addEventListener("click", () => {
    kundvagnDiv.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
    kundvagnDiv.classList.remove("show");
});



//Här slutar knapparna i topnav. 


/*Kundvagn*/

const buyBtn = document.getElementById("buyBtn");
const cartPayedModal = document.getElementById("cartPayedModal");
const closeBtn = document.getElementById("closeBtn");


buyBtn.addEventListener("click", () => {
    cartPayedModal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    cartPayedModal.classList.remove("show");
});



