import { sector } from "../../databaseFictitious/sector.js";
import { infoSectorActive } from "../../databaseFictitious/infoSectorActive.js";
import { objhorizontalBarChartActive } from "../horizontalBarChartActive.js";
import { infoSectorLack } from "../../databaseFictitious/infoSectorLack.js";
import { objhorizontalBarChartLack } from "../horizontalBarChartLack.js";

export function updateHorizontalChart(indexColunmChart) {
    /*
        Verfica qual barra do barChart foi clicada e atualiza o
        horizontalbarChartActivate e horizontalbarChartLack com informacoes de acordo com o setor selecionado.
    */

    const nameSectorSelected = sector[indexColunmChart];

    //horizontalbarChartActivate
    objhorizontalBarChartActive.data.labels =
        infoSectorActive[nameSectorSelected.toUpperCase()].labels;

    objhorizontalBarChartActive.data.datasets[0].data =
        infoSectorActive[nameSectorSelected.toUpperCase()].data;

    objhorizontalBarChartActive.update();

    // -------------------------------------------------------------

    //horizontalbarChartLack
    objhorizontalBarChartLack.data.labels =
        infoSectorLack[nameSectorSelected.toUpperCase()].labels;

    objhorizontalBarChartLack.data.datasets[0].data =
        infoSectorLack[nameSectorSelected.toUpperCase()].data;

    objhorizontalBarChartLack.update();
}
