let expenseForm = document.getElementById("expenseForm");
let expenseList = document.getElementById("expenseList")
expenseForm.addEventListener("submit", (ele) => {
    ele.preventDefault();
    let description = document.getElementById('description').value;
    let category = document.getElementById('category').value;
    let amount = document.getElementById('amount').value;

    if (document && category && !isNaN(amount)) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td>
                            <td>${category}</td>
                            <td>${amount}</td>`;
        expenseList.append(newRow)

        document.getElementById('description').value = "";
        document.getElementById('category').value = "";
        document.getElementById('amount').value = "";
    } else {
        alert("Please enter the valid data!")
    }
})