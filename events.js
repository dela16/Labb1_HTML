function myBurgerMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";         
    } else {
        x.style.display = "block"; 
    }
}


//Ett verktyg för administratören att läga till kurser i kurslistan.
//En modal som poppar upp där de fyller i info.
//Kursnummer, kurstitel, kursbeskrivning, kursens längd.
//When savebtn.onClick += array.push();
//Visas på presentationssidan. Göra som genomgången 3/2 med <ul>.



//Kundvagnen. En ikon uppe till höger. Ny HTML sida med överblick över valda kurser.
//When valdKurs.onClick += array.push(); (Checkbox?)
//Sedan få det att synas i html så som genomgången den 3/2 med <ul>.

//Kundvagnen - Vilka kurser finns? <ul>
//ta bort och lägga till kurser. (Knappar med array (pop/push), checkbox. Hur nå rätt index?)
//Knapp med titeln köp. Och modal-ruta poppar upp och bekräftar köpet. 