import { sector } from "../../databaseFictitious/sector.js";
import { infoSectorLack } from "../../databaseFictitious/infoSectorLack.js";
import { objhorizontalBarChartLack } from "../horizontalBarChartLack.js";

export function updateHorizontalChartLack(indexColunmChart) {
    /*
        Verfica qual barra do barChart foi clicada e atualiza o
        horizontalbarChartActivate com informacoes de acordo com o setor selecionado.
    */

    const sectorSelected = sector[indexColunmChart];

    objhorizontalBarChartLack.data.labels =
        infoSectorLack[sectorSelected.toUpperCase()].labels;

    objhorizontalBarChartLack.data.datasets[0].data =
        infoSectorLack[sectorSelected.toUpperCase()].data;

    objhorizontalBarChartLack.update();
}
