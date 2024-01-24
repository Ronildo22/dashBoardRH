
// Obtenha o contexto do canvas para o gráfico de barras
var ctx = document.getElementById('myChart').getContext('2d');


// Defina os dados para o gráfico de barras
var data = {
    labels: ['WillBank', 'Carrefour', 'Noverde', 'Ativos'],
    datasets: [
        {
            label: 'Coloboradores Ativos',
            data: [20, 30, 15, 25],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        },
        {
            label: 'Colaboradores em Falta',
            data: [15, 25, 10, 20],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }
    ]
};


// Configure as opções do gráfico de barras
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

// Crie o gráfico de barras
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});



// Adicione um evento de clique na segunda barra (Colaboradores em Falta)
document.getElementById('myChart').onclick = function(evt) {
    var activePoints = myChart.getElementsAtEventForMode(evt, 'nearest', {intersect: true}, false);
    var firstPoint = activePoints[0];

    console.log(activePoints);

    console.log('==================================');

    console.log(firstPoint);
    
    // Se clicar na segunda barra, crie um gráfico de rosca

    // EU CONSIGO SEPARAR QUAL EU CLIQUEI
    //firstPoint.index

    // (firstPoint && firstPoint.datasetIndex === SE FOR 0 É A PRIMEIRA BARRA SE FOR 1 É A SEGUNDA)
    if (firstPoint && firstPoint.datasetIndex === 1) {
        createPieChart();
    }
    

};


// Função para criar o gráfico de rosca
function createPieChart() {

    // Obtenha o contexto do canvas para o gráfico de rosca
    var pieCtx = document.getElementById('myPieChart').getContext('2d');

    // Defina os dados para o gráfico de rosca
    var pieData = {
        labels: ['Falta 1', 'Falta 2', 'Falta 3', 'Falta 4'],
        datasets: [{
            data: [5, 10, 8, 7],
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    };

    // Crie o gráfico de rosca
    var myPieChart = new Chart(pieCtx, {
        type: 'doughnut',  // Pode ser 'pie' ou 'doughnut'
        data: pieData
    });
    

}

