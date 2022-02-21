const courses = `[{"Kursnummer": "1",
    "Kurstitel": "Vad är internet?", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd": "10 veckor."},

 {"Kursnummer": "2",
    "Kurstitel": "C#, Java, C++ och mycket mer", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd": "40 veckor."},

 {"Kursnummer": "3", 
    "Kurstitel": "AI - Prata med robotar.", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd": "10 veckor."},

 {"Kursnummer": "4", 
    "Kurstitel": "Cloud - Mer än fluffiga moln.", 
    "Kursbeskrivning": "lorem ipsum", 
   "Längd": "25 veckor."},

 {"Kursnummer": "5", 
    "Kurstitel": "Office 365, grundkurs.", 
    "Kursbeskrivning":"lorem ipsum", 
    "Längd": "5 veckor."},

 {"Kursnummer": "6", 
    "Kurstitel": "Paint - Din bästa vän.", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd": "5 veckor."},

  {"Kursnummer": "7", 
    "Kurstitel": "Office 365, Advanced.", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd": "10 veckor."},

   {"Kursnummer": "8", 
    "Kurstitel": "Paint - Din bästa vän, Advanced", 
    "Kursbeskrivning": "lorem ipsum" , 
    "Längd": "10 veckor."}]`

const courseList = JSON.parse(courses);


const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

   let cNumber = document.getElementById("courseNumber").value;
   // console.log(cNumber);
   let cTitel = document.getElementById('courseTitle').value;
   let cDescription = document.getElementById('courseDescription').value;
   let cLength = document.getElementById('courseLength').value;
   
   // const kurs = `<li>Kursnummer: ${cNumber}, Kurstitel: ${cTitel}, Kursbeskrivning: ${cDecription}, Längd: ${cLength}</li>`;
   // document.getElementById("existingCourses").innerHTML += kurs;
   // const kurs = `{"Kursnummer": ${cNumber}", 
   //  "Kurstitel": "${cTitel}", 
   //  "Kursbeskrivning": "${cDescription}" , 
   //  "Längd": "${cLength}"}` //Nu är kursen ett json objekt.
    
   // const nyKurs = JSON.stringify(kurs);
const kurs = new Object();
kurs.Kursnummer = cNumber;
kurs.Kurstitel = cTitel;
kurs.Kursbeskrivning = cDescription;
kurs.Längd = cLength;


   courseList.push(kurs);
   getCourses(); 
   adminModalContainer.classList.remove("show");
   //Här kan du skriva in kod för att tömma rutorna. Göra det till en funktion? 
   
});





 const cart = []; 

if (buyCourseBtn.addEventListener("click", () => {
   kurs.Kursnummer = "1";
   kurs.Kurstitel = "BuyInternet";
   kurs.Kursbeskrivning = "lorem Ipsum";
   kurs.Längd = "10 veckor.";
})); {

    for (let i = 0; i < cart.length; i++) {
            const cartItem = cart[i];
            let courseItem = `<li>Kursnummer: ${cartItem.Kursnummer}, Kurstitel: ${cartItem.Kurstitel}, Kursbeskrivning: ${cartItem.Kursbeskrivning}, Längd: ${cartItem.Längd}</li>`;
            document.getElementById("coursesInCart").innerHTML += courseItem;
        };

   cart.push("hej"); 
 } 

       //alternativt!

const buyCourseBtn = document.getElementById("buyBtn");//OBS! Deta ID finns inte i nuläget!


    