const lineChart = document.querySelector("#line-chart").getContext("2d");
export const objLineChart = new Chart(lineChart, {
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
                data: [72, 72, 72, 72, 72, 72, 41, 41, 41, 41, 41, 41],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
                tension: 0.4,
            },
            {
                label: "Indice de Demissão",
                data: [36, 36, 36, 36, 36, 36, 24, 24, 24, 24, 24, 24],
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
                    color: "rgba(255, 255, 255, 1)",
                },
            },
        },
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: "rgba(255, 255, 255, 1)",
                },
            },
            x: {
                ticks: {
                    color: "rgba(255, 255, 255, 1)",
                },
            },
        },
    },
});
