const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.pro-container');
hiddenElements.forEach((el) => observer.observe(el));


function singleproductpage(){
    const producttp = 1;
}

function sendMail() {
    var params = {
        Name : document.getElementById("conname").value,
        Email : document.getElementById("conemail").value,
        Message : document.getElementById("conmessage").value
    }
    emailjs.send("service_jceqj07", "template_oifsoq2", params)
}

function singleproductpage() {
    var clickedChild = document.querySelector('#karimdiv .pro-container:hover');
    if (clickedChild) {
        console.log('Clicked child:', clickedChild.textContent);
    }
    const productimage = clickedChild.firstElementChild.firstElementChild.href

    document.getElementById("singlediv").innerHTML="<img>";
}