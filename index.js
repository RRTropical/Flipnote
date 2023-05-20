fetch('index.html')
    .then(response => response.text())
    .then(text => {
        const defaultBodyCode = text
    })
var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0
IsEditing = false
var EDN = "?" 
let isClicked = false
const scrollBar = {
    shown: true,
    hide: function(){                                                 
        document.body.style.overflow = "hidden"
        this.shown = false;
    },
    show: function(){
        document.body.style.overflow = "scroll"
        this.shown = true;
    }
}

scrollBar.hide()

xIcon.addEventListener("click", function(){
    typeNote();
    IsEditing = false
    container3.style.display = "none";
})

checkIcon.addEventListener("click", function(){
    if (IsEditing == true){
        IsEditing = false
        var noteText = document.getElementById("note-text").value;
        localStorage.removeItem(EDN.innerHTML);
        EDN.innerHTML = noteText
        localStorage.setItem(EDN.innerHTML, EDN.innerHTML)
        container3.style.display = "none";
        document.getElementById('note-text').placeholder="Write Note..."
    }else{
        createNote(document.getElementById("note-text").value);
    }
})
function enterDown(event){
    if(event.key == 'Enter'){
        if (IsEditing == true){
            IsEditing = false
            var noteText = document.getElementById("note-text").value;
            localStorage.removeItem(EDN.innerHTML);
            EDN.innerHTML = noteText
            localStorage.setItem(EDN.innerHTML, EDN.innerHTML)
            container3.style.display = "none";
            document.getElementById('note-text').placeholder="Write Note..."
        }else{
            createNote(document.getElementById("note-text").value);
        }
    }else if(event.key == 'Escape'){
        typeNote();
        IsEditing = false
        container3.style.display = "none";
    }
}
setInterval(function(){
    if(container3.style.display == 'block'){
        document.addEventListener('keydown', enterDown)
    }else{
        document.removeEventListener('keydown', enterDown)
    }
})
document.addEventListener('keydown', function(event){
    if(event.key == 'c' && event.ctrlKey){
        event.preventDefault()
        typeNote()
    }else if(event.key == 'o' && event.ctrlKey){
        event.preventDefault()
        options()
    }
})

function typeNote(){
    if(container3.style.display == "none"){
        document.getElementById("note-text").value = ""
        container3.style.display = "block";
        document.getElementById('note-text').focus()
    }
    else{
        container3.style.display = "none";
        document.getElementById("note-text").value = "";
    }
}


function createNote(NoteValue){
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");
    node1.id = "Note";
    node1.innerHTML = NoteValue;
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:26px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color()
    node1.style.backgroundColor = color()
    container3.style.display = "none";
    localStorage.setItem(document.getElementById('note-text').value, document.getElementById('note-text').value);
    if(node1.innerHTML == ""){
        return
    }
    //function EditNote(){
        //NT = window.prompt("What would you like to change this note text to?");
        //if (NT.startsWith("+"))
        //{
            //node1.innerHTML = node1.innerHTML + NT.replace("+", "")
        //}else if (NT.startsWith('-')){
            //node1.innerHTML = node1.innerHTML.replace(NT.replace("-", ""), "")
        //}else{
        //node1.innerHTML = NT;
        //}
    //}
    //This was commented out because it seemed... Not very "user friendly"

    window.EditNote = function(){
        if(container3.style.display == "none"){
            container3.style.display = "block";
            document.getElementById('note-text').value = node1.innerHTML
            document.getElementById('note-text').focus()
            document.getElementById('note-text').select()
            document.getElementById("note-text").placeholder="Edit Note..."
        }
        else{
            container3.style.display = "none";
            document.getElementById("note-text").value = "";
        }
    }
    node0.appendChild(node1);
    container2.insertAdjacentElement("beforeend",node0);

    node0.addEventListener("mouseenter", function(){
        node0.style.transform = "scale(1.1)";
    })
    node0.addEventListener("mouseleave", function(){
        node0.style.transform = "scale(1)";
    })

    /*node0.addEventListener("dblclick", function(){
        unselectText()
        popup(node1)
    })*/
    node0.addEventListener("click", function(){
        unselectText()
        popup(node1)
    })

    /*node0.addEventListener('mousedown', function(event){ //Start click
        event.preventDefault();
        isClicked = true //variable change
        setTimeout(function() { //Wait a few seconds
            if(isClicked){ //If you're still holding
                popup(node1)
            }
        }, 700 /*700 = almost a second*//*)
    })
    node0.addEventListener('mouseup', function(event){ //Stop click
        event.preventDefault();
        isClicked = false
    })
    node0.addEventListener('touchstart', function(event){ //Start click
        event.preventDefault()
        isClicked = true //variable change
        setTimeout(function() { //Wait a few seconds
            if(isClicked){ //If you're still holding
                popup(node1)
            }
        }, 700 /*700 = almost a second*//*)
    })
    node0.addEventListener('touchend', function(event){ //Stop click
        event.preventDefault();
        isClicked = false
    })*/
    node0.addEventListener('contextmenu', function(event){
        event.preventDefault()
    })


}


function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random() * random_margin.length)];
}

function rotate(){
    var random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)"];

    return random_rotate[Math.floor(Math.random() * random_rotate.length)]
}

function color(){
    var random_color = ["#c2ff3d","#32EAEA","#5FEA32","#BD3BAD","#5FA5FA","#FA5FFA"];

    if(i > random_color.length - 1){
        i = 0;
    }
    return random_color[i++];
}

function createOption1(NoteValue){
    var node0 = document.createElement('div');
    var node1 = document.createElement('h1');
    node1.id = 'Note';
    node1.innerHTML = NoteValue;
    node1.setAttribute('style', 'width:250px; height:250px; font-size:26px; padding:26px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)');
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color()
    node1.style.backgroundColor = color()
    container3.style.display = 'none';
    node0.appendChild(node1);
    container2.insertAdjacentElement('beforeend',node0);

    node0.addEventListener('mouseenter', function(){
        node0.style.transform = 'scale(1.1)';
    })
    node0.addEventListener('mouseleave', function(){
        node0.style.transform = 'scale(1)';
    })
    node0.addEventListener('contextmenu', function(event){
        event.preventDefault();
})
    node0.addEventListener('dblclick', function(event){
        event.preventDefault();
})
node0.addEventListener('click', function(){
    isClicked = false;
})
   node0.addEventListener('click', function(){
        window.location.pathname = '/UDN.html';
})
}
function createOption2(NoteValue){
    var node0 = document.createElement('div');
    var node1 = document.createElement('h1');
    node1.id = 'Note';
    node1.innerHTML = NoteValue;
    node1.setAttribute('style', 'width:250px; height:250px; font-size:26px; padding:26px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)');
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color()
    node1.style.backgroundColor = color()
    container3.style.display = 'none';
    node0.appendChild(node1);
    container2.insertAdjacentElement('beforeend',node0);

    node0.addEventListener('mouseenter', function(){
        node0.style.transform = 'scale(1.1)';
    })
    node0.addEventListener('mouseleave', function(){
        node0.style.transform = 'scale(1)';
    })
    node0.addEventListener('contextmenu', function(event){
        event.preventDefault();
})
    node0.addEventListener('dblclick', function(event){
        event.preventDefault();
})
node0.addEventListener('click', function(){
    isClicked = false;
})
   node0.addEventListener('click', function(){
        window.open('https://discord.gg/27y9Bjr2da');
})
}
function createOption3(NoteValue){
    var node0 = document.createElement('div');
    var node1 = document.createElement('h1');
    node1.id = 'Note';
    node1.innerHTML = NoteValue;
    node1.setAttribute('style', 'width:250px; height:250px; font-size:26px; padding:26px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)');
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color()
    node1.style.backgroundColor = color()
    container3.style.display = 'none';
    node0.appendChild(node1);
    container2.insertAdjacentElement('beforeend',node0);

    node0.addEventListener('mouseenter', function(){
        node0.style.transform = 'scale(1.1)';
    })
    node0.addEventListener('mouseleave', function(){
        node0.style.transform = 'scale(1)';
    })
    node0.addEventListener('contextmenu', function(event){
        event.preventDefault();
})
    node0.addEventListener('dblclick', function(event){
        event.preventDefault();
})
node0.addEventListener('click', function(){
    isClicked = false;
})
   node0.addEventListener('click', function(){
        //window.location.pathname = "/about me.html";
        aboutMe()
})
}
function createGameAdvertisement(){
    var node0 = document.createElement('div');
    var node1 = document.createElement('h1');
    node1.id = 'Note';
    node1.innerHTML = "Beware The Asteroid";
    node1.setAttribute('style', 'width:250px; height:250px; font-size:26px; padding:26px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)');
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color()
    node1.style.backgroundColor = color()
    container3.style.display = 'none';
    node0.appendChild(node1);
    container2.insertAdjacentElement('beforeend',node0);

    node0.addEventListener('mouseenter', function(){
        node0.style.transform = 'scale(1.1)';
    })
    node0.addEventListener('mouseleave', function(){
        node0.style.transform = 'scale(1)';
    })
    node0.addEventListener('contextmenu', function(event){
        event.preventDefault();
})
    node0.addEventListener('dblclick', function(event){
        event.preventDefault();
})
node0.addEventListener('click', function(){
    isClicked = false;
})
   node0.addEventListener('click', function(){
    window.open('https://tropicalrr.itch.io/beware-the-asteroid');
})
}
function createResetButton(NoteValue){
    var node0 = document.createElement('div');
    var node1 = document.createElement('h1');
    node1.id = 'Note';
    node1.innerHTML = NoteValue;
    node1.setAttribute('style', 'width:250px; height:250px; font-size:26px; padding:26px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)');
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color()
    node1.style.backgroundColor = color()
    container3.style.display = 'none';
    node0.appendChild(node1);
    container2.insertAdjacentElement('beforeend',node0);

    node0.addEventListener('mouseenter', function(){
        node0.style.transform = 'scale(1.1)';
    })
    node0.addEventListener('mouseleave', function(){
        node0.style.transform = 'scale(1)';
    })
    node0.addEventListener('contextmenu', function(event){
        event.preventDefault()
})
    node0.addEventListener('dblclick', function(event){
        event.preventDefault();
})
node0.addEventListener('click', function(){
    isClicked = false;
})
   node0.addEventListener('click', function(){
        window.location.reload()
})
}
function options(){
    hideAllNotes()
    scrollBar.show()
    createOption1('Click to go to the Update Log.');
    createOption2('Click to join my discord.');
    createOption3('Click to view the About Me section.');
    createGameAdvertisement();
    createResetButton("Click to go back to Flipnote.")
}


var values = [],
keys = Object.keys(localStorage),
i = keys.length;

while ( i-- ) {
values.push( localStorage.getItem(keys[i]) );
}
if(values.length != 0){
    for(let i=0; i < values.length; i++){
        if (values[i] != "" && values[i] != 'honey:core-sdk:*'){
            createNote(values[i]);
            
    }else{
        localStorage.removeItem('');
    }   }
}


setInterval(function checkPath(){
    if(window.location.pathname == '/index.html'){
        window.location.pathname = '/'
    }
}, 500)

function aboutMe()
{
fetch('about me.html')
 .then(response => response.text())
 .then(text => {
    const aboutMeCode = text
    document.body.innerHTML = aboutMeCode
 })
}

function hideAllNotes()
{
    let elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].id == "Note") {
        elements[i].remove();
      }
    }
      
}

//Hey there whoever's reading

function popup(node){
node.id = 'optionsnote'
var popup = window.open("", "noteOptions", "width=200,height=100");
popup.document.write('<div class="ops" id="opss"</div>')

var button1 = popup.document.createElement("img");
button1.style.width = '65'
button1.style.height = '65'
//button1.src = 'data:image/png;base64,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'
button1.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAZlBMVEX///8AAADp6emQkJDa2tqYmJiUlJScnJzz8/Ps7Oypqanf39+zs7M7OzslJSXBwcG6urpGRkYdHR0xMTEsLCxBQUF4eHgODg5paWnKyspLS0sZGRkUFBTR0dFSUlJvb2+FhYVhYWHatOerAAAC/klEQVRoge2aW3eqMBCFSaFeQC1CtWoPtv7/P9kqAQJMEi47k+Xq2S+88a1MZrMnQBD8F1LFcX8JEw/gWNz1EbODX4XUwheYG62AhVgygheiJb5Vh0L4Qb92wVxoAixEyABeUmAOtAbsvuBkqTnM1etqrlUnJrDbvX7zh04/jGiXBfeAjuTVUnA8eik2w9Boc919PBCNXXXp42ryYURXecxe8OaRORBdgMBqSNRoo7lOeHCDTk3k3QoB7qbTkIJnLwBwP52qDj/ryTlgzVQs2tEAX9GDgK3g1/lL1o0+dZuRHb6fv8v60ce06sN6Nlg77BnRjsF6dD4fbJgyDWiAn4xT5kNUcm3ngxdaoAkN2GNbqTsFl+a6zLeTubn66NLXAB8PBbeTa8tV6k7BEclo72oKfZ6/4nHgpsNna0ypoejhzdVoY7+tG7AQqS/wgdPHqhjSidY7t4/rFfsCs6VTV4zp1BZrOqliTqdGgK4eMvr0xR6LlQDD3rRSe2uuZwZPK7Xzs5NO3nzszU7e0smbjy++mstfOvnysbd08jbseetqb4/MZ06nJzs7AdJpGtibnf6ejwFdHU8CAw5tQfE5AQzo6sD6mwAlxPefSWjAsCf/mkvGFRzQ1cFWvqmLdiPAgHQKVvVLwhHoPaK5IjEeDfBxIL/ZjkNjwDIoKvS/AWDAlPnQqbydfCsb2cGYb9e/2ooW2uprQDqVWtW3lAVPMnOpUWB1jdVevxvAEDuVUn9HsKMR6VSpdaSo0LqCA4a9Rl+CQGvaDPCiXFHevrmpw2Fd/dC6e/vK1/1HCiqPpYoeQPcgRaSTKuJPGxqNBgffxH5SaKCPpW4EmUCD0knRKqfINboakKA+LtVrbam2uWDppEj7Z5GKzhyADWeLJrlw6aSKau3OXt/we3zXVU/GfTGntKZbmwFtGX0covtP7bbOzsj6VyP5aZlGTpq61JFg7m7hxiWzVLu1s+txU7jxUFd1a2eXr/gtcb7QRr8HiuxwCtPkhRH6UBIX7Mw/qh88ISc3NXq1bwAAAABJRU5ErkJggg=='
popup.document.getElementById('opss').appendChild(button1)
var button2 = popup.document.createElement("img");
button2.style.width = '65'
button2.style.height = '65'
button2.src = "data:image/jpeg;base64,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"
popup.document.getElementById('opss').appendChild(button2)

button1.addEventListener("click", function(){
    node.id = 'Note'
    popup.close()
    IsEditing = true
    EDN = node
    EditNote();
});

button2.addEventListener("click", function(){
    localStorage.removeItem(document.getElementById('optionsnote').innerHTML)
    document.getElementById('optionsnote').remove()
    node.id = 'Note'
    popup.close()
});
}

function unselectText(){
    if (window.getSelection) {
        var selection = window.getSelection();
        selection.removeAllRanges();
      } else if (document.selection) {
        document.selection.empty();
      }
      
}
