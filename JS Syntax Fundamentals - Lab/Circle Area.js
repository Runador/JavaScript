function solve(num) {
    let area;
    if (typeof(num) === 'number') {
        area = Math.PI * (num * num);
        return area.toFixed(2);
    } else {
        return `We can not calculate the circle area, because we receive a ${typeof(num)}.`
    }
}
