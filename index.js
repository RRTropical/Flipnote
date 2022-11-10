var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0
IsEditing = false
var EDN = "?" 

xIcon.addEventListener("click", function(){
    typeNote();
    IsEditing = false
    container3.style.display = "none";
})

checkIcon.addEventListener("click", function(){
    if (IsEditing == true){
        IsEditing = false
        var noteText = document.getElementById("note-text").value;
        EDN.innerHTML = noteText
        container3.style.display = "none";
        document.getElementById('note-text').placeholder="Write Note..."
    }else{
        createNote();
    }
})


function typeNote(){
    if(container3.style.display == "none"){
        document.getElementById("note-text").value = ""
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
        document.getElementById("note-text").value = "";
    }
}


function createNote(){
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");
    node1.innerHTML = noteText;
    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:26px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.backgroundColor = color()
    container3.style.display = "none";

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

    function EditNote(){
        if(container3.style.display == "none"){
            container3.style.display = "block";
            document.getElementById('note-text').value = node1.innerHTML
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

    node0.addEventListener("dblclick", function(event){
        node0.remove();
    })

    node0.addEventListener('contextmenu', function(event){
        event.preventDefault();
        IsEditing = true
        EDN = node1
        EditNote();
    })

    document.getElementById("note-text").value = "";
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