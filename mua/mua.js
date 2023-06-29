let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantily = document  .querySelector ('.quantily');

openShopping.addEventListener('click', () => {
    body.classList.add ('active');
})

closeShopping.addEventListener('click', () => {
    body.classList.remove ('active');
})

var products = [
    {											
        id: 9 ,										
        name: "Pro Soccer Online",																				
        price :120000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1583320/hero_capsule.jpg?t=1678234196"										                                 
    },											
    {											
        id: 10 ,										
        name: "EA SPORTS™ FIFA 23",																				
        price :120000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1811260/hero_capsule.jpg?t=1687245726"										
    },											
    {											
        id: 11 ,										
        name: "Skater XL - The Ultimate Skateboarding",																				
        price :120000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/962730/hero_capsule.jpg?t=1677776088"										                                      
    },											
    {											
        id: 12 ,										
        name: "PGA TOUR 2K23",																				
        price :120000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1588010/hero_capsule.jpg?t=1686755544"										                                   
    },
    {											
        id: 13 ,										
        name: "Hogwarts Legacy",																				
        price :120000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/990080/hero_capsule.jpg?t=1680647016"										                                 
    },											
    {											
        id: 14 ,										
        name: "Sons Of The Forest",																				
        price :130000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1326470/hero_capsule.jpg?t=1679677298"										
    },											
    {											
        id: 15 ,										
        name: "Red Dead Redemption 2",																				
        price :150000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1174180/hero_capsule.jpg?t=1671485009"										                                      
    },											
    {											
        id: 16 ,										
        name: "The Elder Scrolls V",																				
        price :500000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/306130/hero_capsule.jpg?t=1685974187"										                                   
    },
]

let listCards = [];

function initApp  () {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img style= " border-radius: 20px; width:  250px;" src ="${value.image}"/>
            <div class= "title"> ${value.name}</div>
            <div class="price"> ${value.price.toLocaleString()}đ</div>
            <button onclick= "addToCard(${key})">Add to Card</button>
        `;
        list.appendChild(newDiv);
    });
}

initApp();


function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img style= " border-radius: 8px" src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}đ</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    console.log(key, quantity);
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
