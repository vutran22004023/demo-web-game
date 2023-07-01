var free = [											
    {											
        id: 1 ,										
        name: "Summoners War: Chronicles",																				
        price :"free to play",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/2167580/hero_capsule.jpg?t=1684992880"										                                 
    },											
    {											
        id: 2 ,										
        name: "Counter-Strike: Global Offensive",																				
        price :"free to play",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/730/hero_capsule.jpg?t=1683566799"										
    },											
    {											
        id: 3 ,										
        name: "World of Warships",																				
        price :"free to play",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/552990/hero_capsule_alt_assets_3.jpg?t=1687507851"										                                      
    },											
    {											
        id: 4 ,										
        name: "PUBG: BATTLEGROUNDS",																				
        price :"free to play",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/578080/hero_capsule.jpg?t=1684838697"										                                   
    },											                                            
];		
var action = [
    {											
        id: 5 ,										
        name: "Call of duty",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1938090/hero_capsule.jpg?t=1687571108"										                                 
    },											
    {											
        id: 6 ,										
        name: "BattleBit Remastered",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/671860/hero_capsule.jpg?t=1686877598"										
    },											
    {											
        id: 7 ,										
        name: "Grand Theft Auto V",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/271590/hero_capsule.jpg?t=1678296348"										                                      
    },											
    {											
        id: 8 ,										
        name: "Six Days in Fallujah",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1548850/hero_capsule.jpg?t=1687576255"										                                   
    },		
]
var sport = [
    {											
        id: 9 ,										
        name: "Pro Soccer Online",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1583320/hero_capsule.jpg?t=1678234196"										                                 
    },											
    {											
        id: 10 ,										
        name: "EA SPORTS™ FIFA 23",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1811260/hero_capsule.jpg?t=1687245726"										
    },											
    {											
        id: 11 ,										
        name: "Skater XL - The Ultimate Skateboarding",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/962730/hero_capsule.jpg?t=1677776088"										                                      
    },											
    {											
        id: 12 ,										
        name: "PGA TOUR 2K23",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1588010/hero_capsule.jpg?t=1686755544"										                                   
    },
]
var adventure = [
    {											
        id: 13 ,										
        name: "Hogwarts Legacy",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/990080/hero_capsule.jpg?t=1680647016"										                                 
    },											
    {											
        id: 14 ,										
        name: "Sons Of The Forest",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1326470/hero_capsule.jpg?t=1679677298"										
    },											
    {											
        id: 15 ,										
        name: "Red Dead Redemption 2",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/1174180/hero_capsule.jpg?t=1671485009"										                                      
    },											
    {											
        id: 16 ,										
        name: "The Elder Scrolls V",																				
        price :"200000",										
        image:"https://cdn.akamai.steamstatic.com/steam/apps/306130/hero_capsule.jpg?t=1685974187"										                                   
    },
]




function listProduct () {
 
const detailBtns =document.querySelectorAll('.js-detail');
const modal = document.querySelector('.js-modal');
const modalContainer =document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

function showTableDetail() {
    modal.classList.add('open')
} 

function hideTableDetail() {
    modal.classList.remove('open')
} 


for (const detailBtn of detailBtns ) {
    detailBtn.addEventListener('click', showTableDetail)
}
modalClose.addEventListener('click', hideTableDetail)

modal.addEventListener('click', hideTableDetail)

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})
}

let listCards = [];
let listCards1 = [];
let listCards2 = [];
let listCards3 = [];
let freeGame = document.getElementById('game-free');
let gameAction = document.getElementById('game-action');
let gameSport = document.getElementById('game-sport');
let gameAdventure = document.getElementById('game-adventure');
let modalBody = document.querySelector('.modal-body');


// game free
function initGamefree  () {
    free.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="item-block" style="">
            <img class="card-img-top" src="${value.image}" alt="Card image cap" style= " border-radius: 20px; width:  250px;">
            <div class="card-body">
                <h5 class="card-title" style= "margin: 20px 0">${value.name}</h5>
                <button onclick= "addToCard(${key})" class="btn btn-primary js-detail" style= "padding: 20px">Go somewhere</button>
            </div>
        </div>
        `;
        freeGame.appendChild(newDiv);
    });
}

initGamefree();

// game action
function initGameAction  () {
    action.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="item-block" style="">
            <img class="card-img-top" src="${value.image}" alt="Card image cap" style= " border-radius: 20px; width:  250px;">
            <div class="card-body">
                <h5 class="card-title" style= "margin: 20px 0">${value.name}</h5>
                <button onclick= "addToCard1(${key})" class="btn btn-primary js-detail" style= "padding: 20px">Go somewhere</button>
            </div>
        </div>
        `;
        gameAction.appendChild(newDiv);
    });
}

initGameAction();

// game sport
function initGameSport  () {
    sport.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="item-block" style="">
            <img class="card-img-top" src="${value.image}" alt="Card image cap" style= " border-radius: 20px; width:  250px;">
            <div class="card-body">
                <h5 class="card-title" style= "margin: 20px 0">${value.name}</h5>
                <button onclick= "addToCard2(${key})" class="btn btn-primary js-detail" style= "padding: 20px">Go somewhere</button>
            </div>
        </div>
        `;
        gameSport.appendChild(newDiv);
    });
}

initGameSport();

// game Adventure
function initGameAdventure  () {
    adventure.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <div class="item-block" style="">
            <img class="card-img-top" src="${value.image}" alt="Card image cap" style= " border-radius: 20px; width:  250px;">
            <div class="card-body">
                <h5 class="card-title" style= "margin: 20px 0">${value.name}</h5>
                <button onclick= "addToCard3(${key})" class="btn btn-primary js-detail" style= "padding: 20px">Go somewhere</button>
            </div>
        </div>
        `;
        gameAdventure.appendChild(newDiv);
    });
}

initGameAdventure();





function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = free[key];
        reloadCard();
    }

    delete listCards[key];
}

function addToCard1(key){
    if(listCards1[key] == null){
        listCards1[key] = action[key];
        reloadCard1();
    }

    delete listCards1[key];
}

function addToCard2(key){
    if(listCards2[key] == null){
        listCards2[key] = sport[key];
        reloadCard2();
    }

    delete listCards2[key];
}

function addToCard3(key){
    if(listCards3[key] == null){
        listCards3[key] = adventure[key];
        reloadCard3();
    }

    delete listCards3[key];
}




function reloadCard(){
    modalBody.innerHTML = '';
    listCards.forEach((value, key)=>{
        
        if(value != null){
            let newDiv = document.createElement('div');
            newDiv.classList.add('modal-body-1');
            newDiv.innerHTML = `

            <div class="modal-table-1" style="margin-right: 30px;">
            <img style="width: 250px; height: 300px; border-radius: 20px;" src="${value.image}" alt="">
            <div style="margin: 10px; font-size: 20px;;" class="price">${value.price.toLocaleString()}đ</div>
            <button style="padding: 20px 70px; margin-left: 10px; border-radius: 8px; background-color: rgb(234, 55, 55); color: #fff;" class="button-buy">Mua</button>
          </div>

          <div class="modal-tabel-2">
            <h1 style=" margin-bottom: 30px;" class="name-game">${value.name}</h1>
            <div style=" overflow-y: hidden; border: 1px solid #000; height: 300px;width: 550px; padding: 0 10px;" class="description-game">
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
            </div>
          </div>
            `;
            modalBody.appendChild(newDiv);
        }
    })
}

function reloadCard1(){
    modalBody.innerHTML = '';
    listCards1.forEach((value, key)=>{
        
        if(value != null){
            let newDiv = document.createElement('div');
            newDiv.classList.add('modal-body-1');
            newDiv.innerHTML = `
            <div class="modal-table-1" style="margin-right: 30px;">
            <img style="width: 250px; height: 300px; border-radius: 20px;" src="${value.image}" alt="">
            <div style="margin: 10px; font-size: 20px;;" class="price">${value.price.toLocaleString()}đ</div>
            <button style="padding: 20px 70px; margin-left: 10px; border-radius: 8px; background-color: rgb(234, 55, 55); color: #fff;" class="button-buy">Mua</button>
          </div>

          <div class="modal-tabel-2">
            <h1 style=" margin-bottom: 30px;" class="name-game">${value.name}</h1>
            <div style=" overflow-y: hidden; border: 1px solid #000; height: 300px;width: 550px; padding: 0 10px;" class="description-game">
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
            </div>
          </div>
            `;
            modalBody.appendChild(newDiv);
        }
    })
}

function reloadCard2(){
    modalBody.innerHTML = '';
    listCards2.forEach((value, key)=>{
        
        if(value != null){
            let newDiv = document.createElement('div');
            newDiv.classList.add('modal-body-1');
            newDiv.innerHTML = `
            <div class="modal-table-1" style="margin-right: 30px;">
            <img style="width: 250px; height: 300px; border-radius: 20px;" src="${value.image}" alt="">
            <div style="margin: 10px; font-size: 20px;;" class="price">${value.price.toLocaleString()}đ</div>
            <button style="padding: 20px 70px; margin-left: 10px; border-radius: 8px; background-color: rgb(234, 55, 55); color: #fff;" class="button-buy">Mua</button>
          </div>

          <div class="modal-tabel-2">
            <h1 style=" margin-bottom: 30px;" class="name-game">${value.name}</h1>
            <div style=" overflow-y: hidden; border: 1px solid #000; height: 300px;width: 550px; padding: 0 10px;" class="description-game">
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
            </div>
          </div>
            `;
            modalBody.appendChild(newDiv);
        }
    })
}

function reloadCard3(){
    modalBody.innerHTML = '';
    listCards3.forEach((value, key)=>{
        
        if(value != null){
            let newDiv = document.createElement('div');
            newDiv.classList.add('modal-body-1');
            newDiv.innerHTML = `
            <div class="modal-table-1" style="margin-right: 30px;">
            <img style="width: 250px; height: 300px; border-radius: 20px;" src="${value.image}" alt="">
            <div style="margin: 10px; font-size: 20px;;" class="price">${value.price.toLocaleString()}đ</div>
            <button style="padding: 20px 70px; margin-left: 10px; border-radius: 8px; background-color: rgb(234, 55, 55); color: #fff;" class="button-buy">Mua</button>
          </div>

          <div class="modal-tabel-2">
            <h1 style=" margin-bottom: 30px;" class="name-game">${value.name}</h1>
            <div style=" overflow-y: hidden; border: 1px solid #000; height: 300px;width: 550px; padding: 0 10px;" class="description-game">
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
              adasdasdasdasdasadasdasdasdasdasadasdasdasdasdas
            </div>
          </div>
            `;
            modalBody.appendChild(newDiv);
        }
    })
}