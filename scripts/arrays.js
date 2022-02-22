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

saveBtn.addEventListener("click", () => {//Här sparar och lägger vi till den nya kursen i listan på admin sidan. 

   let cNumber = document.getElementById("courseNumber").value;
   let cTitel = document.getElementById('courseTitle').value;
   let cDescription = document.getElementById('courseDescription').value;
   let cLength = document.getElementById('courseLength').value;
   
   const kurs = new Object();
   kurs.Kursnummer = cNumber;
   kurs.Kurstitel = cTitel;
   kurs.Kursbeskrivning = cDescription;
   kurs.Längd = cLength;

   courseList.push(kurs);
   getCourses(); 
   adminModalContainer.classList.remove("show");
   //Här kan du skriva in kod för att tömma rutorna. Göra det till en funktion? 
   printAllCourseCards(); 
});


//Vad som krävs för att kunna skapa ett kort till presentationssidan.
function createCourseCard(cNumber, cTitel,cDescription,cLength) {
   if (cNumber == "") {
      window.alert("Add a course Number");
      return; 
      
   }

   let existingCourse = false; 
   const newCourse = new kurs(cNumber, cTitel, cDescription, cLength);
   courses.forEach((course) => {
      if (course.cNumber == newCourse.cNumber) {
         existingCourse = true; 
         return; 
      }
   });

   if (existingCourse) {
      window.alert("Must be a unique course Number.");
      return; 
   }
   courseList.push(newCourse);
   printAllCourseCards(); 

}



const cart = []; 

function addCoursToCart(courseNumber) {
   const addingCourseToCart = courses.find((el) => el.cNumber === courseNumber);//Blir detta rätt nu? Rad150. Inte samma i rad 132. 
   
   if (cart.includes(addingCourseToCart)) {
      console.log("Course is already in cart.");
      return;
   } else {
      cart.push(addingCourseToCart);
      console.log(`${addingCourseToCart.cTitel} added`);
      updateCart(); 
   }

}

function removeCourseFromCart(cartItem) {
   const cartItemToRemove = cart.find((el) => el.cNumber === cartItem);

   console.log(cart.indexOf(cartItemToRemove));
   cart.splice(cart.indexOf(cartItemToRemove), 1);
   
   updateCart();
   
}


function printAllCourseCards() {
   // const cart = document.getElementById("coursesInCart"); 
   // cart.innerHTML = ""; 

   // if (coursesInCart.length <= 0) {
   //    const extraCartDiv = document.createElement("div");
   //    extraCartDiv.innerText = "Cart is empty."
   //    cart.appendChild(extraCartDiv);
   // };
   const mainDiv = document.getElementById("courses");
   mainDiv.innerHTML = ""; 
   courseList.forEach((courseItem) => {
      console.log(courseItem);
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("grid-item");
      
      const headLine = document.createElement("h1");
      headLine.innerText = courseItem.Kurstitel; 

      const p = document.createElement("p");
      p.innerText = courseItem.Kursbeskrivning;

      const buySpan = document.createElement("span");
      buySpan.innerText = "Köp"; 
      buySpan.classList.add("buy");
      buySpan.setAttribute("onClick", `addCoursToCart("${courseItem.Kursnummer}")`);

      
      cardDiv.appendChild(headLine);
      cardDiv.appendChild(p);
      cardDiv.appendChild(buySpan);

      mainDiv.appendChild(cardDiv);

   })
   

}



printAllCourseCards(); 

// 

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


    