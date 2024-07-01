const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const mobile = document.getElementById('mobile');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        mobile.classList.add('hide');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        mobile.classList.remove('hide');
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


function Sellform() {
    var dataparams = {
        SellerName : document.getElementById("selname").value,
        SellerEmail : document.getElementById("selemail").value,
        SellerProductName : document.getElementById("selproname").value,
        SellerProductImage : document.getElementById("selproimg").value,
        SellerProductPrice : document.getElementById("selproprice").value,
        SellerProductDescription : document.getElementById("selmessage").value
    }
    emailjs.send("service_ffy298b", "template_odfgtvh", dataparams);
    window.location.href = './Verification'
}

function singleproductpage() {
    var clickedChild = document.querySelector('#karimdiv .pro-container:hover');
    if (clickedChild) {
        console.log('Clicked child:', clickedChild.textContent);
    }
    const productimage = clickedChild.firstElementChild.firstElementChild.href

    document.getElementById("singlediv").innerHTML="<img>";
}

var product = 0;

const ringcra = document.getElementById('ringcra');

ringcra.addEventListener('click', function() {
  window.location.href = './Product-127283';
    product = ringcra;
});

const blubracelet = document.getElementById('blubracelet');

blubracelet.addEventListener('click', function() {
  window.location.href = './Product-246824';
  product = blubracelet;
});

const greenbracelet = document.getElementById('greenbracelet');

greenbracelet.addEventListener('click', function() {
  window.location.href = './Product-987521';
  product = greenbracelet; 
});

const whitebracelet = document.getElementById('whitebracelet');

whitebracelet.addEventListener('click', function() {
  window.location.href = './Product-789350';
  product = whitebracelet;
}); 

const rockybracelet = document.getElementById('rockybracelet');

rockybracelet.addEventListener('click', function() {
    window.location.href = './Product-652170';
    product = rockybracelet;
  });

const divcart = document.getElementById('cart-status');
function Addtocart() {
    localStorage.setItem("cart", product)
    window.location.href = "cart.html"
    const item = localStorage.getItem("cart")
    divcart.innerHTML += '<div class="cartitem"><div class="productty"> <div class="itdes"><p>'+item+'</p></div></div></div>'
}

const test = "test"
localStorage.setItem("testconst", test);
localStorage.getItem("testconst")