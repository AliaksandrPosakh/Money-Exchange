// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    const changesMoney = {};
        
    const noMoneyForChange = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }
    if (currency > 10000) {
        return  noMoneyForChange;
    }
    if (currency <= 0) {
        return changesMoney;
    }

    let remainder = currency;
    
    changesMoney.H =Math.floor((remainder-remainder % 50) / 50);
    remainder = remainder % 50;
    
    
    changesMoney.Q =Math.floor((remainder - remainder % 25) / 25);
    remainder = remainder % 25;
    
    
    changesMoney.D =Math.floor((remainder - remainder % 10) / 10);
    remainder = remainder % 10;
    
    
    changesMoney.N =Math.floor((remainder - remainder % 5) / 5);
    remainder = remainder % 5;
    
    changesMoney.P =Math.floor((remainder - remainder % 1) / 1);
   

    for (let key in changesMoney) {
        if (changesMoney[key] == 0) {
           delete changesMoney[key];
        }
    }

    return changesMoney;
}
