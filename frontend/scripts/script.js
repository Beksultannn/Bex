var x = 50;
var y = "yo";
for(var i = 0; i < x; i++){
    y = y + i + " ";    
}

// Тут через класс
here = document.getElementsByClassName("here")
here[1].innerHTML = "edednj"

// Тут через айди
first_here = document.getElementById("here1")
first_here.innerHTML = y

data = [
        ["title1", "title2", "title3"],
        ["Text 1", "Text 2", "text 3"],
        ["images/logic.png", "images/icecream.png", "images/donut.png"]
        ]

for(var i = 0; i < 2; i++){
    parent_box = document.getElementById("third_info")
    card = document.getElementsByClassName("card")[0]
    card2 = card.cloneNode(true);
    parent_box.appendChild(card2)   
}
cards = document.getElementsByClassName("card")
for(var i = 0; i < cards.length; i++){
    cards[i].setAttribute("onmouseover", "change_style(" +i+ ")")
    cards[i].setAttribute("onmouseleave", "change_style2(" +i+ ")")
    header = cards[i].getElementsByClassName("card_header")[0]
    header.innerHTML = data[0][i]
    
    text = cards[i].getElementsByClassName("card_text")[0]
    text.innerHTML = data[1][i]

    card_img = cards[i].getElementsByClassName("card_img")[0]
    card_img.style.backgroundImage = "url("+data[2][i]+")"
}

function change_style(num){
    card_img = cards[num].getElementsByClassName('card_img')[0]
    card_img.style.opacity = 0.5;
}

function change_style2(num){
    card_img = cards[num].getElementsByClassName('card_img')[0]
    card_img.style.opacity = 1;
    hidden_text = card_img.getElementsByClassName("card_hidden_text")
    show(hidden_text);
}
data2 = [
        ["Travis Scott", "Beibit Korgan", "Kairosh"],
        ["1996", "1990", "1985"],
        ["Goosebumps", "Shok Kyzdar", "Ol sen emes"]
       ]
fill_data()
function fill_data(){
     document.write(data2);
}