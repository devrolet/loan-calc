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

    return totalAmount
    // Calc total interest based on term
    // 3 - 5%
    // 6 - 10%
    // 12 - 15%
    // 24 - 10%
}