let search = document.querySelector(".search");
let div = document.querySelector(".emojees");
let all = document.getElementById("all");
let face = document.getElementById("face");
let heart = document.getElementById("heart");
let book = document.getElementById("book");
let hand = document.getElementById("hand");
let sports = document.getElementById("sports");
let flag = document.getElementById("flag");


function displayemojee(searchQuery){
    let filteredlist = emojiList.filter((emojee)=>{
        if(searchQuery.length === undefined){
            return true;
        }
        if(emojee.category.indexOf(searchQuery)!==-1){
            return true;
        }
        if(emojee.description.indexOf(searchQuery)!==-1){
            return true;
        }
        if(emojee.aliases.includes(searchQuery)===true){
            return true;
        }
        
    })
    div.innerHTML="";
    filteredlist.forEach((emojee)=>{
    let ediv = document.createElement("div");
    ediv.style.width="200px";
    ediv.innerText=emojee.emoji;
    
    div.appendChild(ediv);
   })
}
window.addEventListener("load",displayemojee);
search.addEventListener('keyup' ,function(){
let searchvalue=search.value.toLowerCase();
displayemojee(searchvalue);
});


all.addEventListener("click", displayemojee);


face.addEventListener("click", function(){
    let btnvalue = face.id;
    displayemojee(btnvalue);
})

heart.addEventListener("click", function(){
    let btnvalue = heart.id;
    displayemojee(btnvalue);
})


book.addEventListener("click", function(){
    let btnvalue = book.id;
    displayemojee(btnvalue);
})


hand.addEventListener("click", function(){
    let btnvalue = hand.id;
    displayemojee(btnvalue);
})


sports.addEventListener("click", function(){
    let btnvalue = sports.id;
    displayemojee(btnvalue);
})


flag.addEventListener("click", function(){
    let btnvalue = flag.id;
    displayemojee(btnvalue);
})