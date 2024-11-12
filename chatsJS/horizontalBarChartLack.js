import { sector } from "../databaseFictitious/sector.js";

const horizontalBarChartLack = document
    .querySelector("#horizontal-bar-chart-lack")
    .getContext("2d");

export const objhorizontalBarChartLack = new Chart(horizontalBarChartLack, {
    type: "bar",
    data: {
        labels: sector,
        datasets: [
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
        indexAxis: "y",
    },
});
