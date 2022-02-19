const courseList = `[{"Kursnummer": "1",
    "Kurstitel": "Vad är internet?", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd (i veckor)": "10."},

 {"Kursnummer": "2",
    "Kurstitel": "C#, Java, C++ och mycket mer", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd (i veckor)": "40"},

 {"Kursnummer": "3", 
    "Kurstitel": "AI - Prata med robotar.", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd (i veckor)": "10."},

 {"Kursnummer": "4", 
    "Kurstitel": "Cloud - Mer än fluffiga moln.", 
    "Kursbeskrivning": "lorem ipsum", 
   "Längd (i veckor)": "25 "},

 {"Kursnummer": "5", 
    "Kurstitel": "Office 365, grundkurs.", 
    "Kursbeskrivning":"lorem ipsum", 
    "Längd (i veckor)": "5"},

 {"Kursnummer": "6", 
    "Kurstitel": "Paint - Din bästa vän.", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd (i veckor)": "5"},

  {"Kursnummer": "7", 
    "Kurstitel": "Office 365, Advanced.", 
    "Kursbeskrivning": "lorem ipsum", 
    "Längd (i veckor)": "10"},

   {"Kursnummer": "8", 
    "Kurstitel": "Paint - Din bästa vän, Advanced", 
    "Kursbeskrivning": "lorem ipsum" , 
    "Längd (i veckor)": "10"}]`

let courseList = JSON.parse(jsonCourses);

const cart = []; 

switch (itemsInCart) {//Something like this... 
    case $('.buyInternet').click(function () {
        cart.push(`.buyInternet`);

        for (let i = 0; i < cart.length; i++) {
            const course = cart[i];
            let courseItem = `<li>Kursnummer: ${course.Kursnummer}, Kurstitel: ${course.Kurstitel}, Kursbeskrivning: ${course.Kursbeskrivning}, Längd: ${course.Längd}</li>`;
            document.getElementById("coursesInCart").innerHTML += courseItem;
        };
    };