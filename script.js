// const description_title = document.querySelectorAll(".description_title");
// const description = document.querySelector(".description");
// console.log(description_title)
// description_title.forEach( res =>{
//     res.addEventListener('click', ()=> {
//         description.classList.toggle('show')
//     })
// })

let btn = document.querySelectorAll(".icon");
let icon = document.querySelectorAll(".icon");
console.log(btn)

btn.forEach((btan) => {
    btan.addEventListener("click", () => {
        btan.parentNode.classList.toggle('active');
        btan.parentNode.classList.toggle('icon');
    })
})


let titles = document.querySelectorAll(".titles");
console.log(titles)

titles.forEach((btan) => {
    btan.addEventListener("click", () => {
        btan.parentNode.classList.toggle('active');
        btan.parentNode.classList.toggle('icon');
    })
})


// On mouse-over, execute myFunction
function myFunction() {
    document.getElementById("myCheck").click();
   const seletion= document.getElementById("selection")
   //seletion.style.backgroundColor = 'red';
   seletion.value = "minus"
  }
