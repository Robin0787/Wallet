

// All elements 

const deposit = document.getElementById('deposit');
const withdraw = document.getElementById('withdraw');
const balance = document.getElementById('balance');
const depositField = document.getElementById('deposit-field');
const depositBtn = document.getElementById('deposit-btn');
const withdrawField = document.getElementById('withdraw-field');
const withdrawBtn = document.getElementById('withdraw-btn');

// Events
depositBtn.addEventListener('click', forDepositBtn);
withdrawBtn.addEventListener('click', forWithdrawBtn);


// Particular Functions


function forDepositBtn () {
    const amount = parseFloat(depositField.value);

    if(amount > 0) {
        setDepositsValue(amount);
        setBalance(amount,'add'); 
        depositField.value = '';
    } else if (amount == 0) {
        alert('Put a number that is greater than 0');
    }
    else {
        alert('Put a positive number');
    }
}

function forWithdrawBtn () {
    const totalBalance = parseFloat(balance.innerHTML);
    const amount = parseFloat(withdrawField.value);
    
    if(amount > 0) {
        if(totalBalance >= amount) {
            setWithdrawsValue(amount);
            setBalance(amount,'subtract');
            withdrawField.value = '';
        } else {
            alert('Insufficient Balance');
        }
    } else if (amount == 0) {
        alert('Put a number that is greater than 0');
    }
    else {
        alert('Put a positive number');
    }
}


function setDepositsValue (amount) {
    deposit.innerHTML = parseFloat(deposit.innerText) + amount;
}

function setWithdrawsValue (amount) {
    withdraw.innerHTML = parseFloat(withdraw.innerHTML) + amount;
}

function setBalance (amount,type) {
    if(type === 'add') {
        balance.innerHTML = parseFloat(balance.innerText) + parseFloat(amount);  
    }
    else if (type === 'subtract') {
        balance.innerHTML = parseFloat(balance.innerText) - parseFloat(amount);
    }
}