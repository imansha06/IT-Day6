// let customerList = [];

// function btnAddCustomerOnAction(){
//     let txtName = document.getElementById("txtName").value;
//     let txtAddress = document.getElementById("txtAddress").value;
//     let txtAge = document.getElementById("txtAge").value;
//     let txtEmail = document.getElementById("txtEmail").value;
//     let txtSalary = document.getElementById("txtSalary").value;

//     let customer={
//         name:txtName,
//         address:txtAddress,
//         age:txtAge,
//         email:txtEmail,
//         salary:txtSalary
//     }

//     customerList.push(customer);

//     console.log(customerList);
// }


let customerList = [];

function btnAddCustomerOnAction(){

}

function loadTable(){
    let tblCustomers = document.getElementById("tblCustomers");

    tblCustomers.innerHTML+=`<tr>
            <td>Saman</td>
            <td>Walana</td>
            <td>15</td>
            <td>saman@email.com</td>
            <td>750000</td>
        </tr>`

    console.log(tblCustomers);
    
}

