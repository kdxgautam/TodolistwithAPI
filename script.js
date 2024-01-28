const form = document.getElementById("todo-form");

// displayTodo()

form.onsubmit = (e) => {
  e.preventDefault();
  const input = document.getElementById("todo");
  const todo = input.value;
  post(todo);

  const list = document.createElement("li");
  // list.innerHTML = '<input type="checkbox" />${todo}';

  //div button "will work on it later"
  // const divbox = document.createElement('div')
  // divbox.classList = 'listBox'

  //create input check
  const inputCheck = document.createElement("input");
  inputCheck.type = "checkbox";
  inputCheck.classList = "check";
  list.appendChild(inputCheck);

  //create span
  const spantext = document.createElement("span");
  spantext.textContent = `${todo}`;
  list.appendChild(spantext);

  //remove button
  const delButton = document.createElement("button");
  delButton.classList = "delButton";
  delButton.textContent = "Remove";
  list.appendChild(delButton);

  // list.innerHTML = `<input class ="check" type = "checkbox"><span>${todo}</span><button class="delButton">remove</button>`;

  const ulList = document.getElementById("todo-list");
  ulList.appendChild(list);
  const check = list.querySelector(".check");

  delButton.onclick = async (e) => {
    const dataText = await data();
    const foundObject = dataText.find(
      (item) => item["work"] === spantext.textContent
    );
    const id = foundObject._id;
    console.log(id);

    const remList = delButton.parentElement;
    remList.remove();
    deleteTodo(id);
  };

  check.onclick = async (strike) => {
    const spantext = check.nextElementSibling;
    const dataText = await data();

    if (strike.target.checked) {
      spantext.style.textDecoration = "line-through";
      const foundObject = dataText.find(
        (item) => item["work"] === spantext.textContent
      );
      const id = foundObject._id;
      update(id, true);
    } else if (strike.target.checked == false) {
      const foundObject = dataText.find(
        (item) => item["work"] === spantext.textContent
      );
      const id = foundObject._id;
      spantext.style.textDecoration = "none";
      update(id, false);
    }
  };
};

const URL = "http://localhost:7000/todo";

//add data
async function post(read) {
  await fetch(URL, {
    method: "POST",
    body: JSON.stringify({
      work: read,
      completed: false,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

// update work
async function update(id, bool) {
  const URLID = `http://localhost:7000/todo/${id}`;
  await fetch(URLID, {
    method: "PATCH",
    body: JSON.stringify({
      completed: bool,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

//delete work

async function deleteTodo(id) {
  const URLID = `http://localhost:7000/todo/${id}`;
  await fetch(URLID, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

//fetch data
async function data() {
  const data = await fetch(URL);
  const res = await data.json();
  return res;
}


displayTodo()



async function displayTodo() {
  const datatext = await data();
  const length = datatext.length;
  if (length == 0) {
    return "add task";
  } else {
    

    for (let i = 0; i < length; i++) {
      //create input check
      const list = document.createElement("li");
      const inputCheck = document.createElement("input");
      inputCheck.type = "checkbox";
      inputCheck.classList = "check";
      list.appendChild(inputCheck);

      //create span
      const spantext = document.createElement("span");
      spantext.textContent = `${datatext[i].work}`;
      list.appendChild(spantext);

      //remove button
      const delButton = document.createElement("button");
      delButton.classList = "delButton";
      delButton.textContent = "Remove";
      list.appendChild(delButton);

      // list.innerHTML = `<input class ="check" type = "checkbox"><span>${todo}</span><button class="delButton">remove</button>`;

      const ulList = document.getElementById("todo-list");
      ulList.appendChild(list);
      const check = list.querySelector(".check");

  delButton.onclick = async (e) => {
    const dataText = await data();
    const foundObject = dataText.find(
      (item) => item["work"] === spantext.textContent
    );
    const id = foundObject._id;
    console.log(id);

    const remList = delButton.parentElement;
    remList.remove();
    deleteTodo(id);
  };

  check.onclick = async (strike) => {
    const spantext = check.nextElementSibling;
    const dataText = await data();

    if (strike.target.checked) {
      spantext.style.textDecoration = "line-through";
      const foundObject = dataText.find(
        (item) => item["work"] === spantext.textContent
      );
      const id = foundObject._id;
      update(id, true);
    } else if (strike.target.checked == false) {
      const foundObject = dataText.find(
        (item) => item["work"] === spantext.textContent
      );
      const id = foundObject._id;
      spantext.style.textDecoration = "none";
      update(id, false);
    }
  }
    }
  }
}


