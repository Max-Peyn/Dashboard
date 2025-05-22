let context1 = document.getElementById('grafic1').getContext('2d');
let context2 = document.getElementById('grafic2').getContext('2d');

// === ГРАФІК 1: ЛІНІЙНИЙ ===

const data1 = [
    { month: 'Jan', value: 500 },
    { month: 'Jan-15', value: 470 },
    { month: 'Feb', value: 200 },
    { month: 'Feb-15', value: 180 },
    { month: 'Mar', value: 180 },
    { month: 'Mar-15', value: 200 },
    { month: 'Apr', value: 280 },
    { month: 'Apr-15', value: 270 },
    { month: 'May', value: 210 },
    { month: 'May-15', value: 206 },
    { month: 'Jun', value: 210 },
    { month: 'Jun-15', value: 250 },
    { month: 'Jul', value: 240 },
    { month: 'Jul-15', value: 220 },
    { month: 'Aug', value: 200 },
    { month: 'Aug-15', value: 150 },
    { month: 'Sep', value: 105 },
    { month: 'Sep-15', value: 101 },
    { month: 'Oct', value: 140 },
    { month: 'Oct-15', value: 160 },
    { month: 'Nov', value: 180 },
    { month: 'Nov-15', value: 160 },
    { month: 'Dec', value: 130 },
    { month: 'Dec-15', value: 120 },
];

const xData1 = data1.map(item => item.month);
const yData1 = data1.map(item => item.value);

const gradient = context1.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(49, 130, 206, 0.36)');
gradient.addColorStop(1, 'rgba(49, 130, 206, 0)');

new Chart(context1, {
    type: 'line',
    data: {
        labels: xData1,
        datasets: [{
            data: yData1,
            borderWidth: 3,
            borderColor: '#3182CE',
            backgroundColor: gradient,
            tension: 0.4,
            fill: true,
            pointStyle: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: true,
                    maxRotation: 0
                },
                grid: {
                    display: false,
                    drawBorder: false
                },
                border: { color: 'transparent' }
            },
            y: {
                beginAtZero: true,
                ticks: { stepSize: 100 },
                grid: { drawBorder: false },
                border: { color: 'transparent' }
            }
        }
    }
});

// === ГРАФІК 2: BAR CHART ===

const data2 = [
    { month: 'Jul', value: 25 },
    { month: 'Aug', value: 20 },
    { month: 'Sep', value: 30 },
    { month: 'Oct', value: 22 },
    { month: 'Nov', value: 18 },
    { month: 'Dec', value: 29 },
];

new Chart(context2, {
    type: 'bar',
    data: {
        labels: data2.map(d => d.month),
        datasets: [{
            data: data2.map(d => d.value),
            backgroundColor: '#ED8936',
            borderRadius: 10,
            barThickness: 11,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                border: { color: 'transparent' }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10
                },
                grid: {
                    drawBorder: false,
                    borderDash: [4, 4]
                },
                border: { color: 'transparent' }
            }
        }
    }
});
