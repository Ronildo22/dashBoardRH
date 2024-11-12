import { sector } from "../../databaseFictitious/sector.js";
import { infoSectorActive } from "../../databaseFictitious/infoSectorActive.js";
import { objhorizontalBarChartActive } from "../horizontalBarChartActive.js";

export function updateHorizontalChartActive(indexColunmChart) {
    /*
        Verfica qual barra do barChart foi clicada e atualiza o
        horizontalbarChartActivate com informacoes de acordo com o setor selecionado.
    */

    const sectorSelected = sector[indexColunmChart];

    objhorizontalBarChartActive.data.labels =
        infoSectorActive[sectorSelected.toUpperCase()].labels;

    objhorizontalBarChartActive.data.datasets[0].data =
        infoSectorActive[sectorSelected.toUpperCase()].data;

    objhorizontalBarChartActive.update();
}
