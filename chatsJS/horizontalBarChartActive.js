import { sector } from "../databaseFictitious/sector.js";

const horizontalBarChartActive = document
    .querySelector("#horizontal-bar-chart-active")
    .getContext("2d");

export const objhorizontalBarChartActive = new Chart(horizontalBarChartActive, {
    type: "bar",
    data: {
        labels: sector,
        datasets: [
            {
                label: "Funcionarios Ativos",
                data: [20, 18, 15, 25, 16, 10],
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
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
        plugins: {
            legend: {
                labels: {
                    color: "rgba(255, 255, 255, 1)",
                },
            },
        },
        ticks: {
            stepSize: 1,
            beginAtZero: true,
        },
        indexAxis: "y",
    },
});
