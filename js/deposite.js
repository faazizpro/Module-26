//Step 1: Add event listener to the diposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Step 2: Get the diposit amount from the diposit field
    //For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //Step-3: get current deposit amount
    //For non input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //Step 4: Add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //Step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Step 6: Calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //Step 7: Clear the deposit field 
    depositField.value = '';
})