let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ?"0":"") + currentTime.getSeconds();
},1000)


let nimInput = document.getElementById('nim');
let namaInput = document.getElementById('nama');
let alamatInput = document.getElementById('alamat');
let submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const nim = nimInput.value.trim();
    const nama = namaInput.value.trim();
    const alamat = alamatInput.value.trim();
    
    if(nim === ''){
        alert('Please Enter The Students ID');
        return;
    }
    if(nama === ''){
        alert('Please Enter The Students Name');
        return;
    }
    if(alamat === ''){
        alert('Please Enter The Students Address');
        return;
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nim}</td>
        <td>${nama}</td>
        <td>${alamat}</td>
        <td>
            <button id="editData" class="btn btn-warning">Edit</button>
            <button id="deleteData" class="btn btn-danger">Delete</button>
        </td>
    `;

    const tableBody = document.querySelector('tbody');
    tableBody.appendChild(newRow);
    alert("Data Successfully Added");

    

    const deleteButton = newRow.querySelector('#deleteData');
    deleteButton.addEventListener('click', function() {
        tableBody.removeChild(newRow);
        alert("Data Successfully Deleted");
    });

    const editButton = newRow.querySelector('#editData');
    editButton.addEventListener('click', function() {
        const newNama = prompt('Enter new name:', nama);
        const newAlamat = prompt('Enter new address:', alamat);

        if (newNama !== null && newAlamat !== null) {
            namaInput.value = newNama;
            alamatInput.value = newAlamat;
            newRow.children[1].textContent = newNama;
            newRow.children[2].textContent = newAlamat;
        }

        alert("Data Successfully Changed");
    });
});


