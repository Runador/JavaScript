function solve(day, age) {
    let price;
    let isFailed = false;
    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                price = 12;
            } else if (age >= 19 && age <= 64) {
                price = 18;
            } else if (age >= 65 && age <= 122) {
                price = 12;
            } else {
                isFailed = true;
                console.log('Error!');
            }
        break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                price = 15;
            } else if (age >= 19 && age <= 64) {
                price = 20;
            } else if (age >= 65 && age <= 122) {
                price = 15;
            } else {
                isFailed = true;
                console.log('Error!');
            }
        break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                price = 5;
            } else if (age >= 19 && age <= 64) {
                price = 12;
            } else if (age >= 65 && age <= 122) {
                price = 10;
            } else {
                isFailed = true;
                console.log('Error!');
            }
        break;
        default:
            isFailed = true;
            console.log('Error!');
    }
    if (!isFailed) {
        return `${price}$`;
    }
}

console.log(solve('Holiday', -12));