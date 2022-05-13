alert("Welcome, To Real Madrid site");


function darkmode() {
    document.getElementById('body').style.backgroundColor = 'rgb(70 65 65)';
    document.getElementById('h4').style.color = "cornsilk";
    document.getElementById('h5').style.color = "cornsilk";
    document.getElementById('seq').style.color = "cornsilk";
    document.getElementById('seq2').style.color = "cornsilk";
    document.getElementById('goaler').style.color = "cornsilk";

}

function whitemode() {
    document.getElementById('body').style.backgroundColor = 'rgb(230 230 230)';
    document.getElementById('h4').style.color = "black";
    document.getElementById('h5').style.color = "black";
    document.getElementById('seq').style.color = "black";
    document.getElementById('seq2').style.color = "black";
    document.getElementById('goaler').style.color = "black";
    document.getElementById('toshow').style.color = "black";


}
function show() {
    document.getElementById("page4").style.display = 'block';
    document.getElementById("bhide").style.display = "block";

}
function hide() {
    document.getElementById("page4").style.display = "none";
    document.getElementById("bhide").style.display = "none";

}
