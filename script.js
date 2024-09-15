const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const menuBtn = document.querySelector('.menubtn');
const navBar = document.querySelector('.nav-links');

navBar.style.right = "-250px";

menuBtn.addEventListener('click', () =>{
    if(navBar.style.right == "-250px"){
        navBar.style.right = "0";
    } else{
        navBar.style.right == "-250px";
    }
})
