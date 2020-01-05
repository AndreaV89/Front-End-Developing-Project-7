
// Traffic Chart
let trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18,24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2260],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        pointBackgroundColor: 'rgba(255, 255, 255)',
        pointBorderColor: 'rgba(116, 119, 191, 1)',
        pointRadius: 6,
        hoverRadius: 6,
        pointBorderWidth: 2,
        hoverBorderWidth: 2,
        borderColor: 'rgba(116, 119, 191, 1)', 
        borderWidth: 1,
        tension: 0,
    }]
};
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {duration: 0},
    scales: {
        yAxes: [{
            ticks: {
                fontFamily: 'Quicksand',
                beginAtZero: true,
            },
        }],
        xAxes: [{
            ticks: {
                fontFamily: 'Quicksand',
            }
        }]
    },
    legend: {display: false},
    maintainAspectRatio: false,
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Daily Chart
const dailyCanvas = document.getElementById('daily-chart');
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: "# of Hits",
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1,
        maxBarThickness: 40
    }]
};
const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    },
    maintainAspectRatio: false,
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// Mobile Chart
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};
const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            fontFamily: 'Quicksand',
            fontSize: 20,
            boxWidth: 30,
            fontStyle: 'bold',
            padding: 40
        }
    },
    maintainAspectRatio: false,
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});