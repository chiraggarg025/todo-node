// changing background color for marked items
const checked = document.getElementsByClassName('true');
for(let i=0;i<checked.length;i++){
    checked[i].style.backgroundColor = "rgb(238, 73, 73)";
    checked[i].style.color = "white";
    checked[i].style.textDecoration = "line-through";
}
document.getElementById('searchbar').addEventListener('keyup',search_habit);
// function to make searchbar work
function search_habit() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('tasks-form'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="block";                  
        } 
    } 
} 