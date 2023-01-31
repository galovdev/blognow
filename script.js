/*const q = document.querySelector(".q");
const a = document.querySelector(".a");
const arr = document.querySelector(".arrow");

for(let i = 0; i < q.length; i++) {
    q[i].addEventListener("click", () => {
        a[i].classList.toggle("a-opened");
        arr[i].classList.toggle("arrow-rotated");     
    });
} //

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle(".nav-menu-visible")
})

//

document.querySelector(".nav-toggle").addEventListener("click", () => {
    document.querySelector(".nav-menu-visible").style.left = 0%
}) 

*/

const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navMenuVisible = document.querySelector(".nav-menu-visible");
 

navToggle.addEventListener("click", function onClick(event) {
    navMenu.classList.toggle("nav-menu-visible")
}) 

