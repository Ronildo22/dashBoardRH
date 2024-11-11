import { createDoughnutChart } from "../main.js";

export const sector = [
    "Financeiro",
    "TI",
    "Desenvolvimento",
    "Vendas",
    "RH",
    "Marketing",
];

const barChart = document.querySelector("#barChart").getContext("2d");
export const objBarChart = new Chart(barChart, {
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
            {
                label: "Funcionarios em Falta",
                data: [5, 2, 5, 0, 5, 8],
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        y: {
            beginAtZero: true,
        },
        onClick: (e) => {
            const canvasPosition = Chart.helpers.getRelativePosition(
                e,
                objBarChart
            );

            const dataX = objBarChart.scales.x.getValueForPixel(
                canvasPosition.x
            );

            createDoughnutChart(dataX);
        },
    },
});
