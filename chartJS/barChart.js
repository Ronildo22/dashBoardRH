import { updateHorizontalChart } from "./actionsCharts/updateHorizontalBarChart.js";
import { sector } from "../databaseFictitious/sector.js";
import { employeesActive } from "../databaseFictitious/employeesActive.js";
import { employeesLack } from "../databaseFictitious/employeesLack.js";
import { updateLineChart } from "./actionsCharts/updateLineChart.js";

const barChart = document.querySelector("#bar-chart").getContext("2d");
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
                color: "rgba(255, 255, 255, 1)",
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
        y: {
            beginAtZero: true,
        },
        onHover: (event, chartElement) => {
            // TROCA O PONTEIRO AO PASSAR O MOUSE SOBRE AS BARRAS DO GRAFICO
            const canvas = event.native.target;
            canvas.style.cursor = chartElement.length ? "pointer" : "default";
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

            updateHorizontalChart(dataX);
            updateLineChart(dataX);
        },
    },
    defaults: {
        color: "rgba(255, 255, 255, 1)",
    },
});
