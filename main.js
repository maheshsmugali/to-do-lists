let addToDoButton = document.getElementById("addToDo")
let toDoContainer =document.getElementById("toDoContainer");
let input = document.getElementById("inputField");

addToDoButton.addEventListener("click", function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraphS-styling');
    paragraph.innerText = inputField.value;
    inputField.value = "";
    toDoContainer.appendChild(paragraph);
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })
})