var images = ["family.jpg", "me.jpg", "dad.jpg", "mom.png", "sister.jpg", "brother.jpg"];

var text = ["Family", "me", "dad", "mom", "sister", "brother"]
var family_members = 5;

var i = 0;
updatedImage = images[i];
updateText= text[i];
document.getElementById("imgs").src = updatedImage;
document.getElementById("text").innerHTML= updateText;

function myFunction()
{
    i = i + 1;
if (i > family_members)
{
    i = 0
}
updatedImage = images[i];
updateText= text[i];
document.getElementById("imgs").src = updatedImage;
document.getElementById("text").innerHTML= updateText;
}