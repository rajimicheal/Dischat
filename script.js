function inputed(){
    let user = document.getElementById("username").value;
    let coment = document.getElementById("comment").value
    if(user.trim !== ""){
        document.getElementById("demo").innerHTML += "<p>" + user +" : " + coment + "<br>" + "</p>";
    } else{
        document.getElementById("demo").innerText = "enter valid name";
    }
}
let newarrray  = [];
    // let send  = document.getElementById("send")
function send() {
    
    let input  = document.getElementById("input").value;


    newarrray.push(input)

    document.getElementById("input").value = "";
    showname();
}

function  showname() {
    let mydiv = document.getElementById("caca")

    // document.getElementById("caca").innerText = "";\
    mydiv.innerHTML ="";
    
    for (let i = 0; i < newarrray.length; i++) {
        let hElement  = document.createElement("p")
        let mytextnode = document.createTextNode(newarrray[i])
        hElement.appendChild(mytextnode)
        mydiv.appendChild(hElement)
    }
}
// let myarray = ["usuf"  , "dammy" , "dada"]

// function myarrayinput() {
//     let mydiv = document.getElementById("caca")

//     for (let i = 0; i < myarray.length; i++) {
//         let hElement  = document.createElement("h2")

//         hElement.style.color = "red";
//         hElement.style.textTransform = "uppercase";

//         let mytextnode = document.createTextNode(myarray[i])

//         hElement.appendChild(mytextnode)

//         mydiv.appendChild(hElement)
//     }
// }

