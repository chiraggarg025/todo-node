// changing background color for marked items
const checked = document.getElementsByClassName('true');
for(let i=0;i<checked.length;i++){
    checked[i].style.backgroundColor = "rgb(238, 73, 73)";
    checked[i].style.color = "white";
    checked[i].style.textDecoration = "line-through";
}
