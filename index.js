const main = document.getElementById("main");
main.remove();

var newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.textContent = 'Joanna is the champion'
document.body.append(newHeader);

