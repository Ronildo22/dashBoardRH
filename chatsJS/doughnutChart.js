const doughnutChart = document.querySelector("#doughnutChart").getContext("2d");

export const objDoughnutChart = new Chart(doughnutChart, {
    type: "doughnut",
    data: {
        labels: ["Falta 1", "Falta 2", "Falta 3", "Falta 4"],
        datasets: [
            {
                data: [5, 10, 8, 7],
                backgroundColor: [
                    "rgba(97, 97, 97, 0.1)",
                    "rgba(97, 97, 97, 0.1)",
                    "rgba(97, 97, 97, 0.1)",
                    "rgba(97, 97, 97, 0.1)",
                ],
                borderColor: [
                    "rgba(97, 97, 97, 0.1)",
                    "rgba(97, 97, 97, 0.1)",
                    "rgba(97, 97, 97, 0.1)",
                    "rgba(97, 97, 97, 0.1)",
                ],
                borderWidth: 1,
            },
        ],
    },
});
