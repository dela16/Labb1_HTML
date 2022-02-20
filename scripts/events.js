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


const openAdminModal = document.getElementById("openAdminModal");
const adminDiv = document.getElementById("admin");
const closeAdminDiv = document.getElementById("closeAdminBtn");

const openCartmodal = document.getElementById("openCartmodal");
const kundvagnDiv = document.getElementById("kundvagn");
const closeCartBtn = document.getElementById("closeCartBtn"); 


openAdminModal.addEventListener("click", () => {

    document.getElementById("existingCourses").innerHTML = "";
    
   for (let i = 0; i < courseList.length; i++) {
      const course = courseList[i];
      let wceCourses = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`;
      document.getElementById("existingCourses").innerHTML += wceCourses;
    };
    adminDiv.classList.add("show");

});

// openAdminModal.addEventListener("click", () => {
    
// });
closeAdminDiv.addEventListener("click", () => {
    adminDiv.classList.remove("show");
});


openCartmodal.addEventListener("click", () => {
    kundvagnDiv.classList.add("show");
});
closeCartBtn.addEventListener("click", () => {
    kundvagnDiv.classList.remove("show");
});


//switch-sats case= onclick === onclicknamnet {
    //stringify array. till jsonLista.
//}
//I kundvagnsvyn - parse jsonLista.

//Kundvagnen. En ikon uppe till höger. Ny HTML sida med överblick över valda kurser.
//When valdKurs.onClick += array.push(); (Checkbox?)
//Sedan få det att synas i html så som genomgången den 3/2 med <ul>.

//Kundvagnen - Vilka kurser finns? <ul>
//ta bort och lägga till kurser. (Knappar med array (pop/push), checkbox. Hur nå rätt index?)
//Knapp med titeln köp. Och modal-ruta poppar upp och bekräftar köpet.



/*Detta är för kundvagnen?*/ 
const openBtn = document.getElementById("openBtn");
const modalContainer = document.getElementById("modalContainer");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    modalContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});



//Ett verktyg för administratören att läga till kurser i kurslistan.
//When savebtn.onClick += array.push();
//Visas på presentationssidan.

function SaveBtn() {
   
}


//Denna vet vi funkar, bara att den funkar inte när vi har den andra modalen. 
const courseBtn = document.getElementById("courseBtn");
const adminModalContainer = document.getElementById("adminModalContainer");
const adminCourseModal = document.getElementById("adminCourseModal"); 


courseBtn.addEventListener("click", () => {
   adminModalContainer.classList.add("show");//Vill ju inte att hela kurslistan ska försvinna! Den gör väl det pga form hänvisningen. 
});






