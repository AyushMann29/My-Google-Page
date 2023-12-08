
function search(){
    var term = document.getElementById("search").value;
    if (term === "Ayush Mann"| term === "AYUSH MANN"|term === "Ayush"|term === "ayush mann"|term === "ayush"|term === "AYUSH")
    {
        window.location.href = "Second.html";
    }
    else
    {
        window.location.href="https://www.google.com/" + term;
    }
}

function search(){
    const term = document.getElementById("address").value;
    if (term === "Ayush Mann"| term === "AYUSH MANN"|term === "Ayush"|term === "ayush mann"|term === "ayush"|term === "AYUSH")
    {
        window.location.href = "Second.html";
        document.getElementsByClassName("address2")[0].value = term;
    }
    else
    {
        window.location.href="https://www.google.com/" + term;
    }
} 

function Github(){
    window.location.href="https://github.com/AyushMann29/AyushMann29/";
}

function carrd(){
    window.location.href="https://ayurep.carrd.co/";
}

function Itch(){
    window.location.href="https://reproducibletie1.itch.io/rock-paper-scissor/";
}
