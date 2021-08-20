// var sendLeft = document.querySelector("#firstName");
var i = 1;
var userID = document.querySelector("#userID");
var firstName = document.querySelector("#firstName");
var lastName = document.querySelector("#lastName");
var idNumber = document.querySelector("#idNumber");
var phoneNumber = document.querySelector("#phoneNumber");
var table = document.querySelector("#table");
var numberOrId = document.querySelector("#numberOrId");
var outputcreateID = document.querySelector("#outputcreateID");
var outputfname = document.querySelector("#outputfname");
var outputlastName = document.querySelector("#outputlastName");
var outputidNumber = document.querySelector("#outputidNumber");
var outputphoneNumber = document.querySelector("#outputphoneNumber");

//var inputRowBox = document.querySelectorAll(".inputRowBox")  çalışmadı bununla

// var array=[firstName,lastName,idNumber,phoneNumber];
// sendLeft.addEventListener("click", send)

function createID() {
    document.getElementById("userID").innerText = Math.floor(Math.random() * 1000000);
    //console.log(userID)
    //   userID.value = Math.floor(Math.random() * 100000) + 1; üstteki satır yerine bu iki satırı ekleyerek de yapılabilir.
    // userID.innerHTML = userID.value

}


function send() {
    var row = document.createElement('tr')
    table.append(row)
        //  var row = table.insertRow(table.rows.length);
        //console.log(userID.value)

    row.insertCell(0).innerHTML = i;
    row.insertCell(1).innerHTML = userID.innerText;
    row.insertCell(2).innerHTML = firstName.value;
    row.insertCell(3).innerHTML = lastName.value;
    row.insertCell(4).innerHTML = idNumber.value;
    row.insertCell(5).innerHTML = phoneNumber.value;
    row.insertCell(6).innerHTML = '<i class="far fa-edit" onclick="iconEdit(this);"></i> &nbsp &nbsp <i class="far fa-trash-alt" onclick="iconDelete(this);"></i>';
    i++;
}

function deleteInput() {
    userID.innerText = "*";
    firstName.value = "";
    lastName.value = "";
    idNumber.value = "";
    phoneNumber.value = "";

}

function delete1() {
    // for (var i = 0; i < table.children.length; i++) {
    //     if (table.children.innerText == userID || table.children.innerText == i) {
    //         table.children.innerText = "";
    //     } 

    // } üstteki 5 satır ile yazılabilir , ya da alttaki for döngüsü kullanılabilir

    for (let i = 0; i < table.rows.length; i++) {
        const tr = table.rows.item(i);
        const no = tr.children[0].innerText
        const id = tr.children[1].innerText
        if (numberOrId.value === no) {
            tr.remove()
            return // bunu yazarak aynı no veya id de olan satırları tek tek silmeyi sağladık.
        }
        if (numberOrId.value === id) {
            tr.remove()
            return
        }
    }
}

function iconDelete(obj) {

    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("table");
    table.deleteRow(index);
    // for (let i = 0; i < table.rows.length; i++) {
    //     const tr = table.rows.item(i);
    //     tr.remove(i)
    //     console.log(tr)
    //     return

    // }

}

function deleteAll() {
    if (true) {
        alert("Are you sure to delete all?");
        if (true) {
            table.innerHTML = "";
        }
    }
    i = 1;
}


table = document.getElementById("table");
tr = table.getElementsByTagName("tr");

function iconEdit(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    console.log(index)
        // for (let i = 0; i < tr.length; i++) {
        //     outputcreateID.value = tr[0].children[0].innerText // p taglarında innertext, inputlarda value kullanılır
        // 


    for (i = 0; i < tr.length; i++) {

        if (tr[i].getElementsByTagName("td")[1].innerText == tr[index].getElementsByTagName("td")[1].innerText) {
            outputcreateID.value = tr[i].getElementsByTagName("td")[1].innerText;
            outputfname.value = String(tr[i].getElementsByTagName("td")[2].innerText);
            outputlastName.value = tr[i].getElementsByTagName("td")[3].innerText;
            outputidNumber.value = tr[i].getElementsByTagName("td")[4].innerText;
            outputphoneNumber.value = tr[i].getElementsByTagName("td")[5].innerText;

        }
    }
}

function editButton() {
    for (let i = 0; i < tr.length; i++) {

        if (tr[i].getElementsByTagName("td")[1].innerText == outputcreateID.value) {

            console.log(tr[i].getElementsByTagName("td")[1].innerText);

            tr[i].getElementsByTagName("td")[2].innerText = outputfname.value;
            tr[i].getElementsByTagName("td")[3].innerText = outputlastName.value;
            tr[i].getElementsByTagName("td")[4].innerText = outputidNumber.value;
            tr[i].getElementsByTagName("td")[5].innerText = outputphoneNumber.value;
        }
    }
}
// td [2] de değişiklik yapıp edit e basınca bütün td[2] ler yani name ler değişiyor.