function myBurgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";         
    } else {
        x.style.display = "block"; 
    }
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


//Skapa en array med kurser
const jsonCourses = `[{"Kursnummer": "101","Kurstitel": "Vad är internet?", "Kursbeskrivning": "lorem ipsum", "Längd": "10 veckor."},
 {"Kursnummer": "102","Kurstitel": "C#, Java, C++ och mycket mer", "Kursbeskrivning": "lorem ipsum", "Längd": "40 veckor."},
 {"Kursnummer": "103","Kurstitel": "AI - Prata med robotar.", "Kursbeskrivning": "lorem ipsum", "Längd": "10 veckor."},
 {"Kursnummer": "104","Kurstitel": "Cloud - Mer än fluffiga moln.", "Kursbeskrivning": "lorem ipsum", "Längd": "25 vekor." },
 {"Kursnummer": "105","Kurstitel": "Office 365, grundkurs.", "Kursbeskrivning":"lorem ipsum", "Längd": "5 veckor."},
 {"Kursnummer": "106","Kurstitel": "Paint - Din bästa vän.", "Kursbeskrivning": "lorem ipsum", "Längd": "5 veckor."},
  {"Kursnummer": "107","Kurstitel": "Office 365, Advanced.", "Kursbeskrivning": "lorem ipsum", "Längd": "10 veckor."},
   {"Kursnummer": "108","Kurstitel": "Paint - Din bästa vän, Advanced", "Kursbeskrivning": "lorem ipsum" , "Längd": "10 veckor."}]`;

const jsonExistingCourses = JSON.parse(jsonCourses);

for (let i = 0; i < jsonExistingCourses.length; i++){
    const course = jsonExistingCourses[i];
    let courseListItem = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`; 
    document.getElementById("courseList").innerHTML += courseListItem; 
}; 