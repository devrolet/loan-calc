export function calculateTotal(amount, term) {
    // Calc total amount based on the amount
    // 0 - 1000 = 25%
    // 1001 - 5000 = 20%
    // 5001 - 10000 = 15%
    // +10000 = 10%
    let totalAmount;

    if(amount <= 1000) {
        totalAmount = amount * .25;
    } else if(amount > 1000 && amount <= 5000) {
        totalAmount = amount * .2;
    } else if(amount > 5000 && amount <= 10000) {
        totalAmount = amount * .15;
    } else {
        totalAmount = amount * .1;
    }

    // console.log(totalAmount);
    // Calc total interest based on term
    // 3 - 5%
    // 6 - 10%
    // 12 - 15%
    // 24 - 20%
    let totalTerm;

    switch(term) {
        case 3:
            totalTerm = amount * .05;
            break;
        case 6:
            totalTerm = amount * .1;
            break;
        case 12:
            totalTerm = amount * .15;
            break;
        case 24:
            totalTerm = amount * .2;
            break;
        default:
            break;
    }
    
    return amount + totalAmount + totalTerm;

}