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
    for(var i=0; i<=free.length-1; i++) {
        var demo = '<div class="item" style="width: 25%;margin-right: 50px;border: none; background-color: rgb(182, 184, 186); padding: 30px 20px; border-radius: 20px;">';
        demo += '<img class="card-img-top" src="'+free[i].image+'" alt="Card image cap" style= " border-radius: 20px; width:  250px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title" style= "margin: 20px 0">'+free[i].name+'</h5>';
        demo += '<a href="#" class="btn btn-primary" style= "padding: 20px">Go somewhere</a>';
        demo += '</div>';
        demo += '</div>';
        
        document.getElementById("game-free").innerHTML += demo;
    }

    for(var i=0; i<=action.length-1; i++) {
        var demo = '<div class="item" style="width: 25%;margin-right: 50px;border: none; background-color: rgb(182, 184, 186); padding: 30px 20px; border-radius: 20px;">';
        demo += '<img class="card-img-top" src="'+action[i].image+'" alt="Card image cap" style= " border-radius: 20px; width:  250px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title" style= "margin: 20px 0">'+action[i].name+'</h5>';
        demo += '<a href="#" class="btn btn-primary" style= "padding: 20px">Go somewhere</a>';
        demo += '</div>';
        demo += '</div>';
        
        document.getElementById("game-action").innerHTML += demo;
    }

    for(var i=0; i<=sport.length-1; i++) {
        var demo = '<div class="item" style="width: 25%;margin-right: 50px;border: none; background-color: rgb(182, 184, 186); padding: 30px 20px; border-radius: 20px;">';
        demo += '<img class="card-img-top" src="'+sport[i].image+'" alt="Card image cap" style= " border-radius: 20px; width:  250px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title" style= "margin: 20px 0">'+sport[i].name+'</h5>';
        demo += '<a href="#" class="btn btn-primary" style= "padding: 20px">Go somewhere</a>';
        demo += '</div>';
        demo += '</div>';
        
        document.getElementById("game-sport").innerHTML += demo;
    }

    

    for(var i=0; i<=adventure.length-1; i++) {
        var demo = '<div class="item" style="width: 25%;margin-right: 50px;border: none; background-color: rgb(182, 184, 186); padding: 30px 20px; border-radius: 20px;">';
        demo += '<img class="card-img-top" src="'+adventure[i].image+'" alt="Card image cap" style= " border-radius: 20px; width:  250px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title" style= "margin: 20px 0">'+adventure[i].name+'</h5>';
        demo += '<a href="#" class="btn btn-primary" style= "padding: 20px">Go somewhere</a>';
        demo += '</div>';
        demo += '</div>';
        
        document.getElementById("game-adventure").innerHTML += demo;
    }
}