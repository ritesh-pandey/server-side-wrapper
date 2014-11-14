/**
 * This is the controller file for the dashboard. It reads data from the data.js
 * file and prepares the chart objects.
 *
 * More documentation on this can be found at
 * http://docs.fusioncharts.com/FusionCharts.html
 */
FusionCharts.ready(function() {
    var i, chart;

    /**
     * "companyMonitorData" is defined in data.js.
     *
     * Loop over companyMonitorData.targets for Target Reach section of
     * Company Monitor to create hbullet type chart for each section.
     */
    for (i = 0; i < companyMonitorData.targets.length; i++) {
        chart = companyMonitorData.targets[i];
        // The type of chart to render
        chart.type = "hbullet";
        chart.width = "256";
        chart.height = "26";
        chart.containerBackgroundOpacity = "0";
        chart.renderAt = chart.id + "Container";
        chart.showChartLoadingMessage = false;
        chart.showDataLoadingMessage = false;
        FusionCharts.render(chart);
    }

    /**
     * "companyMonitorData" is defined in data.js.
     *
     * Loop over companyMonitorData.revenues for Revenue section of
     * Company Monitor to create sparkcolumn type chart for each section.
     */
    for (i = 0; i < companyMonitorData.revenues.length; i++) {
        chart = companyMonitorData.revenues[i];
        chart.type = "sparkcolumn";
        chart.width = "118";
        chart.height = "38";
        chart.containerBackgroundOpacity = "0";
        chart.renderAt = chart.id + "Container";
        chart.showChartLoadingMessage = false;
        FusionCharts.render(chart);
    }

    /**
     * "companyMonitorData" is defined in data.js.
     *
     * Loop over companyMonitorData.investors for Recent Investor section of
     * Company Monitor to create sparkline type chart for each section.
     */
    for (i = 0; i < companyMonitorData.investors.length; i++) {
        chart = companyMonitorData.investors[i];
        chart.type = "sparkline";
        chart.width = "168";
        chart.height = "28";
        chart.containerBackgroundOpacity = "0";
        chart.renderAt = chart.id + "Container";
        chart.showChartLoadingMessage = false;
        FusionCharts.render(chart);
    }

});