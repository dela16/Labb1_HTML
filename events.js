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
    // chosenCourses.push()//Behöver jag en const för de olika kurserna? jag behöver sätta något i min push.
    // for (let i = 0; i < coursesInCart.length; i ++){
    //     const cartitem = courseList[i];
    //     let cartitem = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`; 
    //     document.getElementById("coursesInCart").innerHTML += cartitem; 
    // }
    // const courseList = JSON.stringify(chosenCourses);
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



//Ett verktyg för administratören att läga till kurser i kurslistan.
//En modal som poppar upp där de fyller i info.
//Kursnummer, kurstitel, kursbeskrivning, kursens längd.
//When savebtn.onClick += array.push();
//Visas på presentationssidan. Göra som genomgången 3/2 med <ul>.

//If Savebtn Clicked - app.post("/", function (req, res){
    //res.send("Course added")
//})
//Något sådant!


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