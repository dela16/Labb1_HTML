function myBurgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";         
    } else {
        x.style.display = "block"; 
    }
}

const chosenCourses = []; 

function buyPaintFunction() {
    chosenCourses.push(cartItem)//Behöver jag en const för de olika kurserna? jag behöver sätta något i min push.
    for (let i = 0; i < coursesInCart.length; i ++){
        const cartitem = courseList[i];
        let cartItem = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`; 
        document.getElementById("coursesInCart").innerHTML += cartitem; 
    }
    const courseList = JSON.stringify(chosenCourses);

    // $('.buy').click(function(){                  I min värld ska ju detta ske först när kursen är tillagd i kundvagnen. Däför hamnar den här nere. 
    //          $('.alert').addClass("show");
    //         $('.alert').removeClass("hide");
    //         $('.alert').addClass("showAlert");
    //         setTimeout(function(){
    //             $('.alert').removeClass("show");
    //             $('.alert').addClass("hide");
    //         },5000); 
    //     });
    //      $('.close-btn').click(function(){
    //           $('.alert').removeClass("show");
    //             $('.alert').addClass("hide");
    //         });
}



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
//En modal som poppar upp där de fyller i info.
//Kursnummer, kurstitel, kursbeskrivning, kursens längd.
//When savebtn.onClick += array.push();
//Visas på presentationssidan. Göra som genomgången 3/2 med <ul>.

//If Savebtn Clicked - app.post("/", function (req, res){
    //res.send("Course added")
//})
//Något sådant!

// const courseBtn = document.getElementById("courseBtn"); //const variabelnamn = ID.
// const adminModalContainer = document.getElementById("adminModalContainer");
// const saveBtn = document.getElementById("saveBtn");

// courseBtn.addEventListener("click", () => {
// //    adminModalContainer.classList.add("show");
// });

// saveBtn.addEventListener("click", () => {
//     adminModalContainer.classList.remove("show");
// });





for (let i = 0; i < jsonExistingCourses.length; i++){
    let course = jsonExistingCourses[i];
    let courseListItem = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`; 
    document.getElementById("courseList").innerHTML += courseListItem; 
}; 

let newCourse = []; 

const addCourse = (ev) => {
    ev.preventDefault();//Hindrar från att submittas, kanske ej behövs
    let course = {
        Kursnummer: document.getElementById('courseNumber').value, 
        Kurstitel: document.getElementById('courseTitle').value,
        Kursbeskrivning: document.getElementById('courseDescription').value,
        Kurslängd: document.getElementById('courseLength').value
    }
    newCourse.push(course);
    document.querySelector('form').reset();//Tömmer dokumentet när jag klickat på save. 
}

function Savebtn() {
    courseList.push(); 
}
