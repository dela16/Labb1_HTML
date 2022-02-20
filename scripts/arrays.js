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
   let cDecription = document.getElementById('courseDescription').value;
   let cLength = document.getElementById('courseLength').value;
   
   const kurs = `<li>Kursnummer: ${cNumber}, Kurstitel: ${cTitel}, Kursbeskrivning: ${cDecription}, Längd: ${cLength}</li>`;
   // document.getElementById("existingCourses").innerHTML += kurs;
   
   courseList.push(kurs);
});



// document.getElementById(saveBtn).onClick = function() {
//     const addCourse = (ev) => {//Här tar vi in värden från admin formuläret
//    ev.preventDefault();//Hindrar från att submittas, kanske ej behövs
//    let newCourse = {
//       Kursnummer: document.getElementById('courseNumber').value,
//       Kurstitel: document.getElementById('courseTitle').value,
//       Kursbeskrivning: document.getElementById('courseDescription').value,
//       Kurslängd: document.getElementById('courseLength').value
//    }
//     courseList.push(newCourse);

//    }
//    function saveCourse() {
//    document.getElementById(existingCourses).innerHTML += courseList; 
// }
// }
 


// const addCourse = (ev) => {//Här tar vi in värden från admin formuläret
//    ev.preventDefault();//Hindrar från att submittas, kanske ej behövs
//    let newCourse = {
//       Kursnummer: document.getElementById('courseNumber').value,
//       Kurstitel: document.getElementById('courseTitle').value,
//       Kursbeskrivning: document.getElementById('courseDescription').value,
//       Kurslängd: document.getElementById('courseLength').value
//    }
   // addCourse.push(newCourse);

//}

// for (let i = 0; i < courseList.length; i++) {
//             const course = courseList[i];
//             let wceCourses = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`;
//             document.getElementById("existingCourses").innerHTML += wceCourses += addCourse;
// };
        


   // if (Savebtn.addEventListener("click", () => {
   // function Savebtn() {
   //    addCourse.push(newCourse);
   //    //document.querySelector('form').reset();//Tömmer dokumentet när jag klickat på save.
   //    //Jag vill inte att modalen ska stängas efter att jag klickat på spara. 
   //    adminModalContainer.classList.add("show");
   //    const adminsAddedCourses = JSON.stringify(addCourse);

   //    //Hur få den att synas på hemsidan? Göra en till ul? 
   //    document.getElementById("existingCourses").innerHTML += adminsAddedCourses;
   // }
   // }));
//    else if(closeAdminBtn.addEventListener("click", () => {
//       function closeAdminbtn() {
//       document.querySelector('form').reset();//Tömmer dokumentet när jag klickat på save. 
//       adminModalContainer.classList.remove("show");
//    }
//    }));
// else {
//    return; 
// }   
//}
 




// const cart = []; 

// if (buyPaintAdvanced() === "click") {
//    cart.push(Paint);
   
// }
// switch (itemsInCart) {//Something like this... 
//     case $('.buyInternet').click(function () {
//         cart.push(`.buyInternet`);

//         for (let i = 0; i < cart.length; i++) {
//             const course = cart[i];
//             let courseItem = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`;
//             document.getElementById("coursesInCart").innerHTML += courseItem;
//         };
//     };