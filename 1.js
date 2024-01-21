var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');
var CompList = document.getElementById('CompList');	 
var tc = document.querySelector('#tc');
var tp = document.querySelector('#tp');
var newTasks = document.querySelector('.newTasks');
var CompTasks = document.querySelector('.CompTasks');
var alterList = true;
var tccount = document.getElementById('tccount');
var tpcount = document.getElementById('tpcount');
	  
function addTask() {
    
		  var count = 2;
		  if (taskInput.value !== '') {
			var taskItem = document.createElement('li');
			taskItem.className = 'taskItem';
			if (count === 2){
				tp.style.visibility="visible";
				newTasks.style.visibility="visible";
				count--;
			}
		var taskText = document.createTextNode(taskInput.value);
        taskItem.appendChild(taskText);

        var deleteBtn = document.createElement('span');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        deleteBtn.onclick = function() {
			var parList = taskItem.closest('ul');
			parList.removeChild(taskItem);
			var alternateList = ChooseAlter(parList);
			if(!alterList){
				tccount.innerText = " :  " + alternateList.childElementCount;
				tpcount.innerText = " :  " + parList.childElementCount;
			}
			else{
				
				tccount.innerText = " :  " + parList.childElementCount;
				tpcount.innerText = " :  " + alternateList.childElementCount;
			 
			}
        };
		
		
		var movtoComp = document.createElement('span');
		movtoComp.className = 'movComp';
        movtoComp.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
		movtoComp.onclick = function() {
			if (count === 1){
				tc.style.visibility="visible";
				CompTasks.style.visibility="visible";
				count--;
			}
			var parList = taskItem.closest('ul');
			var alternateList = ChooseAlter(parList);
            parList.removeChild(taskItem);
			alternateList.appendChild(taskItem);
			if(!alterList){
				movtoComp.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
				tccount.innerText = " :  " + alternateList.childElementCount;
				tpcount.innerText = " :  " + parList.childElementCount;
			}
			else{
				movtoComp.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
				tccount.innerText = " :  " + parList.childElementCount;
				tpcount.innerText = " :  " + alternateList.childElementCount;
			 
			}
		};
		
		taskItem.prepend(movtoComp);
        taskItem.appendChild(deleteBtn);
        taskList.prepend(taskItem);
		tpcount.innerText = " :  " + taskList.childElementCount;
        taskInput.value = '';
      }
    }
	
	 function handleKeyPress(event) {
      if (event.key === 'Enter') {
        addTask();
      }
	}
	
	
	function ChooseAlter(parList){
		    if(parList == taskList){
				alterList = false;
				return CompList;
			}
			else if(parList == CompList){
				alterList = true;
				return taskList;
			}
		}
		
		