const data = [
  {
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Air",
    brand: "Nike",
    price: "120.00 $",
    sizes: ["37", "38", "39"],
  },
  {
    img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Dunk High Pro",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["37", "38", "39", "40", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
    name: "Old Skool",
    brand: "Vans",
    price: "50.00 $",
    sizes: ["37"],
  },
  {
    img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
    name: "Summer Party",
    brand: "Nike",
    price: "100.00 $",
    sizes: ["42", "43", "44", "45", "46"],
  },
{
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Retro",
    brand: "Adidas",
    price: "149.00 $",
    sizes: ["39", "40"],
},
{
    img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Fancy Doc",
    brand: "Crocs",
    price: "79.00 $",
    sizes: ["37", "38", "39", "40", "41", "42"],
},
{
    img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Classic",
    brand: "Reebok",
    price: "99.00 $",
    sizes: ["43", "44", "45", "46"],
},
{
    img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Jungle",
    brand: "New Balance",
    price: "110.00 $",
    sizes: ["39", "40", "41", "42"],
},
{
    img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Essentials",
    brand: "Errant",
    price: "120.00 $",
    sizes: ["41","42", "43", "44", "45", "46"],
},
{
    img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Très chic",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["45", "46"],
},
{
    img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
    name: "Plastic Revolution",
    brand: "Adidas",
    price: "180.00 $",
    sizes: ["37", "38", "39", "40"],
},
{
    img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sporty",
    brand: "Asics",
    price: "90.00 $",
    sizes: ["41","42", "43", "44"],
}
]


// Overlay entfernen

function off() {
  document.getElementById("overlay").style.display = "none";
}


// New Arrivals

let newA = document.getElementById("newA");
let content = document.getElementById("content");
let prices = document.getElementById("prices");
let pluS = document.getElementById("pluS");
let arrows = document.getElementById("arrows");

for (i = 0; i < data.length; i ++) {

  let newArticle = document.createElement("article");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let div4 = document.createElement("div");

  let newImg = document.createElement("img");
  let newName = document.createElement("h4");
  let newPrice = document.createElement("p");
  let plus = document.createElement("p");
  let arrow = document.createElement("img");
  let newBrand = document.createElement("p");
  let newSize = document.createElement("p");

  newImg.classList.add("contents");
  div1.classList.add("div1");
  div2.classList.add("div2");
  div3.classList.add("div3");
  div4.classList.add("div4");
  newName.classList.add("javaH4");
  newPrice.classList.add("javaP");
  plus.classList.add("pluS");
  arrow.classList.add("arrowStyle");
  
  newImg.src = data[i].img;
  newName.textContent = data[i].name;
  newPrice.textContent = data[i].price;
  plus.textContent = "+";
  arrow.src = "assets/img/arrow.svg";
  newBrand.textContent = data[i].brand;
  div4.innerHTML = "<p>" + data[i].sizes.join("</p> <p>") + "</p>";
 
  div1.appendChild(newName);
  div1.appendChild(plus);
  div2.appendChild(newPrice);
  div2.appendChild(arrow);
  div3.appendChild(newBrand);
  div4.appendChild(newSize);

  newArticle.appendChild(newImg);
  newArticle.appendChild(div1);
  newArticle.appendChild(div2);
  div3.appendChild(div4);
  newArticle.appendChild(div3);

  arrow.addEventListener("click", function () {
		if (div3.style.display === "block") {
			div3.style.display = "none";
			arrow.style.transform = "rotate(0deg)";
		} else {
			div3.style.display = "block";
			arrow.style.transform = "rotate(180deg)";
		}
	});

  newA.appendChild(newArticle);
}


// Warenkorb

let counter = document.getElementById("counter");
let count = 0;
let listPlus = document.querySelectorAll(".pluS");

for (i = 0; i < listPlus.length; i ++) {
listPlus[i].addEventListener("click", function () {
  count += 1;
  counter.innerHTML = count;
})}


// Newsletter

let email = document.getElementById("email");
let newsletter = document.getElementById("newsletter");
let message = document.getElementById("newText");
let btn2 = document.getElementById("btn2");

function subscribe () {
  if (email.value == 0) {
    alert("Bitte trage deine E-Mail richtig ein!");
  } else {
    newsletter.innerHTML = "Thank you!";
    message.innerHTML = "You will get our response shortly.";
    btn2.style.display = "none";
    email.style.display = "none";
  }
}