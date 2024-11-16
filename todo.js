let editingIndex = null; 

(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

document.getElementById("myForm").addEventListener('submit', function (event) {
    event.preventDefault(); 
    // const form = document.getElementById("myForm");
    // form.classList.add("")
    const formData = {
        firstName: document.getElementById('fName').value,
        lastName: document.getElementById('lName').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        city: document.getElementById('inputCity').value,
        state: document.getElementById('inputState').value,
        zip: document.getElementById('inputZip').value,
        address: document.getElementById('address').value
    };

    let data = JSON.parse(localStorage.getItem("userData") || "[]");

    if (editingIndex !== null) {
        data[editingIndex] = formData;
    } else {
        data.push(formData);
    }

    localStorage.setItem("userData", JSON.stringify(data));
    renderTable();

    document.getElementById("myForm").reset();
    editingIndex = null;
});

function renderTable() {
    const tableBody = document.getElementById("tableBody");
    const storedData = JSON.parse(localStorage.getItem("userData") || "[]");
    tableBody.innerHTML = "";

    storedData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.firstName}</td>
            <td>${entry.lastName}</td>
            <td>${entry.email}</td>
            <td>${entry.age}</td>
            <td>${entry.city}</td>
            <td>${entry.state}</td>
            <td>${entry.zip}</td>
            <td>${entry.address}</td>
            <td class="d-flex gap-3">
                <button onClick="editData(${index})" class="bg-success text-light rounded-circle border-0 shadow-sm action-icon d-flex justify-content-center align-items-center"><i class="fa-regular fa-pen-to-square"></i></button>
                <button onClick="deleteData(${index})" class="bg-danger text-light rounded-circle border-0 shadow-sm action-icon d-flex justify-content-center align-items-center"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteData(index) {
    let data = JSON.parse(localStorage.getItem("userData") || "[]");
    data.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(data));
    renderTable();
}

function editData(index) {
    const data = JSON.parse(localStorage.getItem("userData") || "[]");
    const entry = data[index];

    document.getElementById('fName').value = entry.firstName;
    document.getElementById('lName').value = entry.lastName;
    document.getElementById('email').value = entry.email;
    document.getElementById('age').value = entry.age;
    document.getElementById('inputCity').value = entry.city;
    document.getElementById('inputState').value = entry.state;
    document.getElementById('inputZip').value = entry.zip;
    document.getElementById('address').value = entry.address;

    editingIndex = index;
}

document.addEventListener('DOMContentLoaded', renderTable);
