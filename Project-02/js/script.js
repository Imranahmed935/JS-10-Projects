const addBtn = document.getElementById("add-Btn");
const modal = document.querySelector(".modal");
const times = document.querySelector(".times");
const registerForm = document.getElementById("form-register");
const allInput = document.querySelectorAll("INPUT");

addBtn.onclick = function () {
  modal.classList.add("active");
};

times.onclick = function () {
  modal.classList.remove("active");
  for (var i = 0; i < allInput.length; i++) {
    allInput[i].value = "";
  }
};

// all global variable
var userData = [];
const id = document.getElementById("id");
const name1 = document.getElementById("name");
const lName = document.getElementById("l-name");
const email = document.getElementById("email");
const code = document.getElementById("code");
const jobTitle = document.getElementById("job-title");
const register = document.getElementById("register-data");
const updateBtn = document.querySelector("#update_Btn");

let imgUrl;

register.onclick = function (e) {
  e.preventDefault();
  registerData();
  dataFromLocal();
  registerForm.reset(" ");
  times.click();
};
if (localStorage.getItem("user") != null) {
  userData = JSON.parse(localStorage.getItem("user"));
}

function registerData() {
  userData.push({
    id: id.value,
    name: name1.value,
    l_Name: lName.value,
    email: email.value,
    Code: code.value,
    Job_Title: jobTitle.value,
    profilePic: imgUrl == undefined ? "images/profile.jpg" : imgUrl,
  });
  const userString = JSON.stringify(userData);
  localStorage.setItem("user", userString);
  swal("Good job!", "you have registered successfully!", "success");
}

const tableData = document.getElementById("table-data");

const dataFromLocal = () => {
  tableData.innerHTML = "";
  userData.forEach((data, index) => {
    tableData.innerHTML += ` 
    <tr index ="${index}">
    <td>${index + 1}</td>
    <td><img src="${data.profilePic}" width="40"></td>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.l_Name}</td>
    <td>${data.email}</td>
    <td>${data.Code}</td>
    <td>${data.Job_Title}</td>
    <td>
    <button class="edit-btn"><i class="fa fa-pencil"></i></button>
    <button class="del-btn"style ="color: rgb(247, 16, 16)"><i class ="fa fa-trash"></i></button>
    </td>
  </tr> 
   `;
  });
  var i;
  let allDelBtn = document.querySelectorAll(".del-btn");
  for (i = 0; i < allDelBtn.length; i++) {
    allDelBtn[i].onclick = function () {
      var tr = this.parentElement.parentElement.parentElement;
      var id = tr.getAttribute("index");
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          userData.splice(id, 1);
          localStorage.setItem("user", JSON.stringify(userData));
          tr.remove();
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    };
  }
  const allEditBtn = document.querySelectorAll(".edit-btn");
  for (i = 0; i < allEditBtn.length; i++) {
    allEditBtn[i].onclick = function () {
      const tr = this.parentElement.parentElement;
      const td = tr.getElementsByTagName("TD");
      const index = tr.getAttribute("index");
      const imgTag = td[1].getElementsByTagName("IMG");
      const profileImage = imgTag[0].src;
      const id1 = td[2].innerHTML;
      const name = td[3].innerHTML;
      const l_name = td[4].innerHTML;
      const email1 = td[5].innerHTML;
      const office_code = td[6].innerHTML;
      const jobTitle1 = td[7].innerHTML;
      addBtn.click();
      register.disabled = true;
      updateBtn.disabled = false;
      id.value = id1;
      name1.value = name;
      lName.value = l_name;
      email.value = email1;
      code.value = office_code;
      jobTitle.value = jobTitle1;
      profileImage.src = profile_pic;
      updateBtn.onclick = function (e) {
        userData[index] = {
          id: id.value,
          name: name1.value,
          l_Name: lName.value,
          email: email.value,
          Code: code.value,
          Job_Title: jobTitle.value,
          profilePic: uploadPic.value == "" ? profileImage : imgUrl,
        };
        localStorage.setItem("user", JSON.stringify(userData));
      };
    };
  }
};
dataFromLocal();

const profile_pic = document.getElementById("profile-Pic");
const uploadPic = document.getElementById("upload-field");
uploadPic.onchange = function () {
  if (uploadPic.files[0].size < 1000000) {
    const fReader = new FileReader();
    fReader.onload = function (e) {
      imgUrl = e.target.result;
      profile_pic.src = imgUrl;
    };
    fReader.readAsDataURL(uploadPic.files[0]);
  } else {
    alert("file size is to long");
  }
};
