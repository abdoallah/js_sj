let counter = 0,
    intrvalTime;

let img = document.getElementById("img");

function chahnge() {
   intrvalTime =setInterval(() => {
       insideinterval();
   }, 500);
}
function insideinterval() {
    if (counter <= img.children.length - 1) {

        img.children[counter].setAttribute('src', "marbels/marble2.jpg");
        if (counter > 0 && counter <= img.children.length - 1) {
            img.children[counter].previousElementSibling.setAttribute("src", "marbels/marble1.jpg")
        }
        counter++;
    } else {
        img.children[counter - 1].setAttribute("src", "marbels/marble1.jpg");
        counter = 0;
    }

}
function stopinterval() {
    clearInterval(intrvalTime);
}