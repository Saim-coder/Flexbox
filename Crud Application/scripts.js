function getAllData() {
      let data = JSON.parse(localStorage.getItem("Todo"))

      let body = document.getElementById('list_body');

      let html = ``;

      if (data) {

            for (let i = 0; i < data.length; i++) {
                  html += `<li >${data[i].text} <button id="item_${data[i].id}" class="deleteBtn" onClick="deleteTodo(${data[i].id})">Delete</button></li>`
            }
      }

      body.innerHTML = html

}

function addTodo() {

      let old_data = JSON.parse(localStorage.getItem("Todo"))

      let todo = document.getElementById("Get").value;

      let arr = []

      let result

      if (old_data) {
            arr = old_data
      }
      if (arr.length > 0) {
            result = {
                  id: arr.length + 1,
                  text: todo
            }
      } else {
            result = {
                  id: 1,
                  text: todo
            }
      }

      arr.push(result)


      localStorage.setItem("Todo", JSON.stringify(arr));

      getAllData()


}

function deleteTodo(todo_id) {
      // Get all data
      let data = JSON.parse(localStorage.getItem("Todo"))

      

}

getAllData()

// Add todo to UI And LocalStorage
document.getElementById('myBtn').addEventListener("click", addTodo);


