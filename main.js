const guitars = [
  {
  id: 1,
  name: "Gibson 4SE",
  imgUrl: "https://images.unsplash.com/photo-1624391673156-a7b7f6c5fb12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpdGFyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  description: "This guitar is beautiful and sounds amazing.",
  available: true,
  size: "22inches", 
  weight: "4lbs",
  invalid: "Offer invalid when out of stock.",
  price: "Price: $2,150",
  offer1: "Buy 2 for $3,200",
  offer2: "Buy 3 for $4,600"
},
{
  id: 2,
  name: "Gibson SL68",
  imgUrl: "https://media.sweetwater.com/api/i/q-82__f-webp__ha-57d2aa15220e9ba6__hmac-d4efa786dbc0769cf7b4142e1b40bb7fac73ec6a/images/guitars/CSJB2057VS/21133013/21133013-angle-large.jpg.auto.webp",
  description: "The guitar that's heard on several classic albums.",
  available: true,
  size: "27inches", 
  weight: "5.6lbs",
  invalid: "Offer invalid when out of stock.",
  price: "Price: $2,750",
  offer1: "Buy 2 for $3,900",
  offer2: "Buy 3 for $5,300"
},
{
  id: 3,
  name: "Taylor 11DE",
  imgUrl: "https://cf1.zzounds.com/media/productmedia/fit,600by600/quality,85/D-28_Street_Legend_frontal_861272-c67e069bca5125e0ce0f1c902a47221f.jpg",
  description: "The one the legends play.",
  available: false,
  size: "22.3inches", 
  weight: "4.1lbs",
  invalid: "Offer invalid when out of stock.",
  price: "Price: $1,956",
  offer1: "Buy 2 for $2,423",
  offer2: "Buy 3 for $3,199"
},
{
  id: 4,
  name: "Gibson Bluebird",
  imgUrl: "https://media.guitarcenter.com/is/image/MMGS7/L28992000001000-00-2000x2000.jpg",
  description: "Sounds and feels like a dream.",
  available: true,
  size: "19.2inches", 
  weight: "3.9lbs",
  invalid: "Offer invalid when out of stock.",
  price: "Price: $2,150",
  offer1: "Buy 2 for $3,099",
  offer2: "Buy 3 for $5,200"
},
{
  id: 5,
  name: "Martin 5F2",
  imgUrl: "https://waltgracevintage.com/cdn/shop/products/IMG_0602.jpg?v=1614105471",
  description: "Hand-crafted with rosewood and detailed precision.",
  available: true,
  size: "25inches", 
  weight: "6.2lbs",
  invalid: "Offer invalid when out of stock.",
  price: "Price: $1,999",
  offer1: "Buy 2 for $3,150",
  offer2: "Buy 3 for $4,299"
},
{
  id: 6,
  name: "Gibson 7E9",
  imgUrl: "https://media.sweetwater.com/images/items/1800/SSHCANGE-xlarge.jpg?v=d42d820a10e3cb9d",
  description: "Sounds like a classic record.",
  available: true,
  size: "26inches", 
  weight: "7.2lbs",
  invalid: "Offer invalid when out of stock.",
  price: "Price: $2,155",
  offer1: "Buy 2 for $3,250",
  offer2: "Buy 3 for $4,610"
}
]

const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
}

const cardsOnDom = (array) => {
  let domString = "";

  for (const guitar of guitars) {
    domString += `
      <div id="cards" class="card ${guitar.id}" style="width: 18rem;">
        
      <div class="card-body">
      <header>
          <h2 class="Gibson 4SE">${guitar.name}</h2>
      </header>
      <section section id="firstSec">
       <div id="pic"> 
        <img src="${guitar.imgUrl}" class="card-img-top" alt="...">
        </div> 
        <div id="descr">
          <p id="description" class="card-text">${guitar.description}</p>
        </div>
          <p id="checkBox">${guitar.available ? "Available" : "Not Available"}</p>
      </section>
      <section id="info1">
        <header>
          <h3>Specifications</h3>
        </header>
        <p>Size: ${guitar.size} </p>
        <p>Weight: ${guitar.weight} </p>
        <footer>
        <p>${guitar.invalid}</p>
        </footer>
      </section>
      <section id="info2"> 
        <header>
          <h3>Other Information</h3>    
        </header>
        <p>${guitar.price}</p>
        <p>${guitar.offer1}</p>
        <p>${guitar.offer2}</p>
      </section>
      <div id="buy">
      <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
    </div>
  </div>`
  }

  renderToDom('#app', domString);

}

const form = () => {
  let domString = '';

   domString += `
    <div class="mb-3">
      <label for="name" class="form-label"></label>
      <input type="text" placeholder="Name" class="form-control" id="name" aria-describedby="emailHelp">
    </div>

    <div class="mb-3">
      <label for="img" class="form-label"></label>
      <input type="Url" placeholder="Img Url" class="form-control" id="img" aria-describedby="emailHelp">
    </div>

    <div class="mb-3">
      <label for="description" class="form-label"></label>
      <input type="text" placeholder="Description" class="form-control" id="description" aria-describedby="emailHelp">
    </div>

    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="available">
      <label class="form-check-label" for="available">Available</label>
    </div>

    <div class="mb-3">
      <label for="size" class="form-label"></label>
      <input type="text" placeholder="Size" class="form-control" id="size" aria-describedby="emailHelp">
    </div>

    <div class="mb-3">
      <label for="weight" class="form-label"></label>
      <input type="text" placeholder="Weight" class="form-control" id="weight" aria-describedby="emailHelp">
    </div>

    <div class="mb-3">
    <label for="invalid" class="form-label"></label>
    <input type="text" placeholder="Offer Invalid" class="form-control" id="invalid" aria-describedby="emailHelp">
    </div>

    <div class="mb-3">
    <label for="price" class="form-label"></label>
    <input type="text" placeholder="Price" class="form-control" id="price" aria-describedby="emailHelp">
    </div>

    <div class="mb-3">
    <label for="offer1" class="form-label"></label>
    <input type="text" placeholder="Offer 1" class="form-control" id="offer1" aria-describedby="emailHelp">
    </div>

    <div class="mb-3">
    <label for="offer2" class="form-label"></label>
    <input type="text" placeholder="Offer 2" class="form-control" id="offer2" aria-describedby="emailHelp">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
   ` 
   renderToDom('#sellForm', domString)
}

const sell = document.querySelector("#sellBtn");
const frm = document.querySelector("#sellForm")

const createGuitar = (e) => {
  e.preventDefault();

  const newGuitar = {
    id: guitars.length + 1,
    name: document.querySelector('#name').value,
    img: document.querySelector('#img').value,
    description: document.querySelector('#description').value,
    available: document.querySelector('#available').checked,
    size: document.querySelector('#size').value,
    weight: document.querySelector('#weight').value,
    invalid: document.querySelector('#invalid').value,
    price: document.querySelector('#price').value,
    offer1: document.querySelector('#offer1').value,
    offer2: document.querySelector('#offer2').value
  }
   
    guitars.push(newGuitar);
    cardsOnDom(guitars);
    form.reset();

  }

const eventListeners = () => {
  sell.addEventListener('click', () => {
    form();
  })

  frm.addEventListener('submit', createGuitar);

}


const startApp = () => {
  cardsOnDom(guitars);
  eventListeners();

};

startApp();
