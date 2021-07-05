function getAllData() {
      let data = JSON.parse(localStorage.getItem("Todo"))

      let body = document.getElementById('list_body');

      let html = ``;

      if (data) {

            for (let i = 0; i < data.length; i++) {
                  html += `
                  <li>
                        ${data[i].text}
                        ${data[i].isDone == true ? ` <button id="item_${data[i].id}" class="deleteBtn"onClick="deleteTodo(${data[i].id})"><i class="fa fa-times" aria-hidden="true"></i></button>` : ''}
                        ${!data[i].isDone == true ? `<input type="checkbox" onclick="checkTodo(this, ${data[i].id})"/>` : ''}
                  </li>`
            }
      }
      body.innerHTML = html

}

function addTodo(e) {
      e.preventDefault()

      let old_data = JSON.parse(localStorage.getItem("Todo"))

      let todo = document.getElementById("Get").value;

      let arr = []

      let result

      if (old_data) {
            arr = old_data
      }
      if (arr.length > 0) {
            result = {
                  id: arr[arr.length - 1].id + 1,
                  text: todo,
                  isDone: false
            }
      } else {
            result = {
                  id: 1,
                  text: todo,
                  isDone: false
            }
      }

      arr.push(result)


      localStorage.setItem("Todo", JSON.stringify(arr));

      document.getElementById("Get").value = ''

      getAllData()


}

function deleteTodo(currentId) {
      // Get all data
      let data = JSON.parse(localStorage.getItem("Todo"))

      for (let i = 0; i < data.length; i++) {
            if (data[i].id === currentId) {
                  data.splice(i, 1)
            }
      }

      localStorage.setItem('Todo', JSON.stringify(data))
      getAllData();
}

function checkTodo(input,currentId) {
      input.setAttribute("disabled", "true")  
      input.setAttribute("checked", "true")  

      // Get all data
      let data = JSON.parse(localStorage.getItem("Todo"))

      for (let i = 0; i < data.length; i++) {
            if (data[i].id === currentId) {
                  data[i].isDone = true
            }
      }

      localStorage.setItem('Todo', JSON.stringify(data))

      getAllData();
      
}

getAllData()

// Add todo to UI And LocalStorage
document.getElementById('myForm').addEventListener("submit", addTodo);
