/*
1. Add Event Hanndler With the Wothdraw Button
2. Get the Withdraw amount from the withdraw input field
2-5. Also make sure to convert the input into a number by using parseFloat
3. Get Previous Withdraw amount
4. calculate total withdraw amaount
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total
7. Clear the input field
*/

//step : 1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //Step 2: 
    const withdrawField = document.getElementById('withdraw-field')
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    
    //Step 3:
    const withDrawTotalElement = document.getElementById('withdraw-total');

    const previousWithdrawTotalString = withDrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //Step 4: 
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withDrawTotalElement.innerText = currentWithdrawTotal;

    //Step 5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //Step-6
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //Step 7:
    withdrawField.value = '';

})