let appTitle = "Kodeloftet Gruppe 10 recap";

// Finne elementet du ønsker å plassere nye elementer under
let mainTitleElement = document.createElement("h1");

// Lag det nye elementet
let bodyElement = document.querySelector("body");

// Og konfigurer det
mainTitleElement.textContent = appTitle;

// Sett det inn i dokumentet
bodyElement.append(mainTitleElement);

let imageList = [
    {
    name: "Sommer i Bergen",
    artist: "Tor Fiskar",
    src:"Images/summer.jpg",
    },
{
    name: "Fisketur",
    artist: "Marita Berge",
    src: "Images/fishing.jpg",
    }, 
    {
        name: "Sommer i Bergen",
        artist: "Tor Fiskar",
        src:"Images/summer.jpg",
        },

];

for (let image of imageList) {
    let imageElement = createImageCard(image);
    bodyElement.append(imageElement);
}

function createImageCard(image) {
// <img height="200" src="Images/summer.jpg" />
let imageShowcaseElement = document.createElement("img");
//<img />
imageShowcaseElement.src = image.src;
// <img src=Images/summer />
imageShowcaseElement.className = "image-card";
// <img height="200" src="Images/summer />"

return imageShowcaseElement;
}