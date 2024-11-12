const lineChart = document.querySelector("#line-chart").getContext("2d");
const objLineChart = new Chart(lineChart, {
    type: "line",
    data: {
        labels: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ],
        datasets: [
            {
                label: "Indice de Contratação",
                data: [80, 80, 75, 70, 56, 55, 40, 40, 40, 40, 40, 40],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: "Indice de Demissão",
                data: [20, 30, 32, 40, 30, 20, 10, 10, 55, 60, 62, 69],
                borderColor: " rgba(179, 38, 38, 1)",
                backgroundColor: "rgba(255, 4, 4, 0.2)",
                borderWidth: 2,
                tension: 0.4,
            },
        ],
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'rgba(255, 255, 255, 1)'
                }
            }
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});
