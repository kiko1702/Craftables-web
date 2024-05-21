const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const mobile = document.getElementById('mobile');
const close = document.getElementById('close');
const products = [
    {
        id: 0,
        image: 'img/products-imgs/CraftAbles ring fake -m- (2).JPG',
        title: 'CraftAbles ring',
        price: 30,
    },
    {
        id: 1,
        image: 'img/products-imgs/cbc blue bracelet.png',
        title: 'CbC blue bracelet',
        price: 25,
    },
    {
        id: 2,
        image: 'img/products-imgs/cbc green bracelet.png',
        title: 'CbC green bracelet',
        price: 25,
    },
    {
        id: 3,
        image: 'img/products-imgs/cbc white bracelet.png',
        title: 'CbC white bracelet',
        price: 25,
    },
    {
        id: 4,
        image: 'img/products-imgs/white rocky bracelet.png',
        title: 'White rocky bracelet',
        price: 35,
    }
]

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

function sendMail() {
    var params = {
        Name : document.getElementById("conname").value,
        Email : document.getElementById("conemail").value,
        Message : document.getElementById("conmessage").value
    }
    emailjs.send("service_jceqj07", "template_oifsoq2", params);
    window.location.href = './Verification';

}

function Sellform(){
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

const ringcra = document.getElementById('ringcra');

ringcra.addEventListener('click', function() {
  window.location.href = './Product-127283';
});

const blubracelet = document.getElementById('blubracelet');

blubracelet.addEventListener('click', function() {
  window.location.href = './Product-246824';
});

const greenbracelet = document.getElementById('greenbracelet');

greenbracelet.addEventListener('click', function() {
  window.location.href = './Product-246824';
});

const whitebracelet = document.getElementById('whitebracelet');

whitebracelet.addEventListener('click', function() {
  window.location.href = './Product-652170';
});

const rockybracelet = document.getElementById('rockybracelet');

rockybracelet.addEventListener('click', function() {
    window.location.href = './Product-987521';
  });

  var cart = [];
  const cartdiv = document.getElementById("cart-status");
  function displaycart(a){
    let j = 0;
    if(cart.length==0){
        console.log(j);
    }
    else{
        document.getElementById("cartstatus").innerHTML = cart.map((items)=> {
            var{image, title, price} = items;
            if(cart.length = 0){} 
            else{
                cartdiv.innerHTML = cart.map((items) => {
                    var {image, title, price} = items;
                    return(
                        '<div class="cart-item"><div class="row-img"><img class="rowimg" src=${image}></div>>p style="font-size: 12px;">${title}</p><h2>${price}</h2><div onclick="delel("+(j++) +");" <p>Remove</p>'
                    );
                })
            }
        })
    }
  }