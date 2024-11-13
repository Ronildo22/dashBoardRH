import { sector } from "../../databaseFictitious/sector.js";
import { objLineChart } from "../lineChart.js";
import { infoSectorHiring } from "../../databaseFictitious/infoSectorHiring.js";

export function updateLineChart(indexColunmChart) {
    /*
         Verifica qual barra do barChart foi clicada e atualiza o
         lineChart com informacoes de acordo com o setor selecionado.
    */

    const nameSectorSelected = sector[indexColunmChart];

    objLineChart.data.datasets[0].data =
        infoSectorHiring[nameSectorSelected.toUpperCase()].data[0];
    objLineChart.data.datasets[1].data =
        infoSectorHiring[nameSectorSelected.toUpperCase()].data[1];

    objLineChart.update();
}
