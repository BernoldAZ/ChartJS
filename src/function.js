import Chart from 'chart.js/auto' // loading all components


function data_generate(func, from, to, step) {
    var array_x = [];
    var array_y = [];
    for (let x = from; x <= to; x += step) {
        array_x.push(Math.round(x * 10 ** 2) / 10 ** 2);
        array_y.push(eval(func));
    }
    return [array_x, array_y];
};
window.addEventListener("load", function() {
    document.getElementById('submit').addEventListener("click",function(){
        paint();
    })
})
let myChart = null;
function paint() {
    expr = document.getElementById('f_input').value;
    try {
        [array_x, array_y] = data_generate(expr, 0, 10, .1);
    } catch (err) {
        [array_x, array_y] = data_generate("1", 0, 10, .1);
        expr = expr + " Error occured";
    }
    myChart?.destroy();
    myChart = new Chart(
        document.getElementById('function'), {
            type: 'line',
            data: {
                labels: array_x,
                datasets: [{
                    label: 'y=' + expr,
                    data: array_y
                }]
            }
        }
    );
};