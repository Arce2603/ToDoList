let index = 0;
function watchForm() {
    let form = document.getElementById('todoForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let newTodo = document.getElementById('newTodo').value;
        if (newTodo !== '') {
            addCheckB(newTodo);
        }
    });
}

function watchButtons() {
    let clear = document.getElementsByClassName("clearButton");
    let mark = document.getElementsByClassName("markAllButton");
    let del = document.getElementsByClassName ("deleteButton");
    clear[0].addEventListener("click", function (e) {
        console.log('clear');
        for (let i = 0; i <index; i += 1) {
            let currCB = document.getElementById('cb' + i);
            currCB.checked = false;
        }
    });
    mark[0].addEventListener("click", function (e) {
        console.log('mark');
        for (let i = 0; i <index; i += 1) {
            let currCB = document.getElementById('cb' + i);
            currCB.checked = true; 
        }
    });
    del[0].addEventListener("click", function (e) {
        console.log('del');
        for (let i = 0; i < index; i += 1) {
            let hold = document.getElementById("listOfTodos");
            hold.removeChild(document.getElementById('Div' + i));
        }
        index = 0;
    });
}

function addCheckB(newT){
    let hold = document.getElementById("listOfTodos");
    let div = document.createElement('div');
    div.className = 'checkBox';
    div.id = 'Div'+index;
    hold.appendChild(div);
    hold = document.getElementById('Div'+index);
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "cb";
    checkbox.id = "cb" + index ;
    checkbox.value = index;
    let label = document.createElement('label');
    let tn = document.createTextNode(newT);
    label.htmlFor = "cb" +index;
    label.appendChild(tn);
    label.className = "checkBoxL";
    hold.appendChild(checkbox);
    hold.appendChild(label);
    index = index + 1;
    document.getElementById('newTodo').value = '';
}

function init() {
    watchForm();
    watchButtons();
}

init();
