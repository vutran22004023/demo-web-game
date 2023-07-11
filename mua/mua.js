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
        id: 1 ,										
        name: "Summoners War: Chronicles",																				
        price :200000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/2167580/hero_capsule.jpg?t=1684992880"										                                 
    },											
    {											
        id: 2 ,										
        name: "Counter-Strike: Global Offensive",																				
        price :200000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/730/hero_capsule.jpg?t=1683566799"										
    },											
    {											
        id: 3 ,										
        name: "World of Warships",																				
        price :200000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/552990/hero_capsule_alt_assets_3.jpg?t=1687507851"										                                      
    },											
    {											
        id: 4 ,										
        name: "PUBG: BATTLEGROUNDS",																	
        price :200000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/578080/hero_capsule.jpg?t=1684838697"										                                   
    },
    {											
        id: 5 ,										
        name: "Call of duty",																				
        price :200000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1938090/hero_capsule.jpg?t=1687571108"										                                 
    },											
    {											
        id: 6 ,										
        name: "BattleBit Remastered",																				
        price :200000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/671860/hero_capsule.jpg?t=1686877598"										
    },											
    {											
        id: 7 ,										
        name: "Grand Theft Auto V",																				
        price :200000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/271590/hero_capsule.jpg?t=1678296348"										                                      
    },											
    {											
        id: 8 ,										
        name: "Six Days in Fallujah",																				
        price :200000,										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1548850/hero_capsule.jpg?t=1687576255"										                                   
    },
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
            <img style= " border-radius: 20px; width:  200px;" src ="${value.image}"/>
            <div style= " margin-top: 10px;color: #fff;" class= "title"> ${value.name}</div>
            <div class="price"> ${value.price.toLocaleString()}đ</div>
            <button style= " border-radius: 10px; padding: 20px" onclick= "addToCard(${key})">Add to Card</button>
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


