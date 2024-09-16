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
const links = document.querySelectorAll('.links');


menuBtn.addEventListener('click', () =>{
    navBar.classList.toggle('on');
})

links.forEach(link =>{
    link.addEventListener('click', () =>{
        navBar.classList.toggle('on');
    })
})
