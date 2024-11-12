import { updateHorizontalChartActive } from "./actionsCharts/updateHorizontalBarChartActive.js";
import { updateHorizontalChartLack } from "./actionsCharts/updateHorizontalChartLack.js";
import { sector } from "../databaseFictitious/sector.js";
import { employeesActive } from "../databaseFictitious/employeesActive.js";
import { employeesLack } from "../databaseFictitious/employeesLack.js";

const barChart = document.querySelector("#barChart").getContext("2d");
export const objBarChart = new Chart(barChart, {
    type: "bar",
    data: {
        labels: sector,
        datasets: [
            {
                label: "Funcionarios Ativos",
                data: employeesActive.data,
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
            {
                label: "Funcionarios em Falta",
                data: employeesLack.data,
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

            // ADQUIRE A BARRA CLICADA E MOSTRA A QUANTIDADE DE FUNCIONARIOS POR CARGO
            const canvasPosition = Chart.helpers.getRelativePosition(
                e,
                objBarChart
            );

            const dataX = objBarChart.scales.x.getValueForPixel(
                canvasPosition.x
            );

            updateHorizontalChartActive(dataX);
            updateHorizontalChartLack(dataX);
        },
    },
});
