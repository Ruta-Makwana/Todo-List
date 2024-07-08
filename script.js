"strict";

const addButton = document.querySelector(".add_btn");
const inputField = document.querySelector("#task");
const unorderedList = document.querySelector(".todo_list--container");
const form = document.querySelector("#add_task");
const checkedTasks = document.querySelector("#checked_tasks");
const allTasks = document.querySelector("#all_tasks");

let allTasksCount = 0;
let completed = 0;

//create a function to create the tasks html text
// anonymous function; not hoisted
const createTaskText = function (taskinput) {
  return `  <div class="todo_list--group">
  <li class="unchecked"><span>${taskinput}</span></li>
  <button class="remove_btn">&#128473;</button>
</div>`;
};

/* counting the tasks using anonymous function */
const countFun = function () {
  allTasksCount = unorderedList.getElementsByTagName("li").length;
  allTasks.textContent = allTasksCount;

  completed = unorderedList.getElementsByClassName("checked").length;
  checkedTasks.textContent = completed;
};

/* adding task function */
addButton.addEventListener("click", (event) => {
  /*using event.preventdefualt to stop the page from refreshing on clicking */
  event.preventDefault();
  if (inputField.value !== "") {
    unorderedList.innerHTML += createTaskText(inputField.value);
    inputField.value = "";
    //or
    // form.reset();
  } else {
    alert("Please add a task!");
  }
  countFun();
});

/* removing the task using bubbling*/
unorderedList.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("remove_btn")) {
    event.target.parentNode.remove();
  }
  countFun();
});

/* checking and unchecking the list */
unorderedList.addEventListener("click", (event) => {
  event.preventDefault();
  /* if the target has a class of unchecked */
//   if (event.target.classList.contains("unchecked")) {
//     /* please change the class of the nearest list item to checked  */
//     /* changing the classname */
//     event.target.closest("li").className = "checked";
//   } else {
//     event.target.closest("li").className = "unchecked";
//   }
//   countFun();

  // another way for above
  // using ternary operator
  const listItem = event.target.closest("li");
  listItem.className = event.target.classList.contains("unchecked")
    ? "checked"
    : "unchecked";
  countFun();
});

/*  */
