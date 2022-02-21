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

//Lägg till kurs på kurssidan.

function courseCard(courseArray = []) {
   courseArray = courseList; 
   const coursesInPresentation = document.getElementById("courses");
   coursesInPresentation.innerHTML = ""; 

   courseArray.forEach((course) => {
      const title = document.createElement("h1");
   const pic = document.createElement("img");
   const desc = document.createElement("p");
   const span = document.createElement("span");

      title.classList.add("card");//Fråga vad dessa göra. Är det egen js kod för att skapa kort? 
      pic.classList.add("card-image");
      desc.classList.add("card-text");
      span.classList.add("card-add-button");
      
      //pic.src = course.image; Denna make more sence när vi lägger till mer kod över. 
      pic.alt = "card-image";
      h1.innerText = course.title + `(${course.id})`;
      p.innerText = course.desc; 
      span.innerText = "Add Course"; 

      
         div.appendChild(h1);
         div.appendChild(img);
         div.appendChild(p);
         div.appendChild(span);



   });

}

// const cart = []; 

// function 
 
// const PaintAdvanced = document.getElementById("paint-Advanced");

// PaintAdvanced.addEventListener("click", () => {
//    addToCart(); 
// });

// function addToCart() {
//    kurs.Kursnummer; 
//    kurs.Kurstitel; 

//    coursesInCart.push(kurs);
// }

// function addToCart() {
//    const item = document.getElementById(coursesInCart);

//    //all elements to be added


//    //push elements into HTML
//    item.appendChild(ele);
//    ele.appendChild(pic);
//    ele.appendChild(price);
//    ele.appendChild(desc);
//    ele.appendChild(add);
//    ele.appendChild(typeBox);

//    //edit pushed elements info from array.
//    pic.innerHTML = courses[i][0];
//    price.innerHTML = "$" + courses[i][1];
//    desc.innerHTML = courses[i][2];
//    add.innerHTML = "add"; 
//    typeBox.typ = "number"; 


// }

// if (buyCourseBtn.addEventListener("click", () => {
//    kurs.Kursnummer = "1";
//    kurs.Kurstitel = "BuyInternet";
//    kurs.Kursbeskrivning = "lorem Ipsum";
//    kurs.Längd = "10 veckor.";
// })); {

//     for (let i = 0; i < cart.length; i++) {
//             const cartItem = cart[i];
//             let courseItem = `<li>Kursnummer: ${cartItem.Kursnummer}, Kurstitel: ${cartItem.Kurstitel}, Kursbeskrivning: ${cartItem.Kursbeskrivning}, Längd: ${cartItem.Längd}</li>`;
//             document.getElementById("coursesInCart").innerHTML += courseItem;
//         };

//    cart.push("hej"); 
//  } 

//        //alternativt!

// const buyCourseBtn = document.getElementById("buyBtn");//OBS! Detta ID finns inte i nuläget!


    