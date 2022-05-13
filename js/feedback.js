alert("welcome to feedback page !");

function darkmode() {
    document.getElementById('body').style.backgroundColor = ' rgb(139 97 97)';
    document.getElementById('text').style.color = 'black';
    document.getElementById('sub').style.backgroundColor = 'white';
    document.getElementById('res').style.backgroundColor = 'white';
    document.getElementById('mode5').style.display = "none";
    document.getElementById('mode6').style.display = "block";

}

function defult() {
    document.getElementById('body').style.backgroundColor = ' rgb(230 230 230)';
    document.getElementById('text').style.color = 'rgb(108 100 64)';
    document.getElementById('sub').style.backgroundColor = 'rgb(195, 150, 28)';
    document.getElementById('res').style.backgroundColor = 'rgb(195, 150, 28)';
    document.getElementById('mode5').style.display = "block";
    document.getElementById('mode6').style.display = "none";


}