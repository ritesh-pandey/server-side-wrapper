/**
 * This file create a theme file for the dashboard. The cosmetics for the
 * different charts are defined here.
 *
 * More information on theming can be found at
 * http://docs.fusioncharts.com/tutorial-configuring-your-chart-theme-manager.html
 */
FusionCharts.register('theme', {
    name: 'company-monitor',
    theme: {
        base: {
            chart: {
                showValue: "0",
                showBorder: "0",
                canvasBorderThickness: "0",
                bgAlpha: "0",
                showShadow: "0",
                baseFontSize: "8",
                baseFontColor: "#666666",
                baseFont: "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, Verdana",
                toolTipBgColor: "#000000",
                tooltipBgAlpha: "80",
                tooltipBorderRadius: "3",
                tooltipPadding: "4",
                tooltipColor: "#ffffff"
            }
        },
        sparkline: {
            chart: {
                showOpenAnchor: "0",
                showCloseAnchor: "0",
                showOpenValue: "0",
                showHighLowValue: "0",
                showCloseValue: "0",
                baseFontSize: "10",
                showTooltip: "1"
            }
        },
        sparkcolumn: {
            chart: {
                highcolor: "7ED321",
                lowcolor: "DD0017",
                plotFillColor: "D8D8D8",
                baseFontSize: "10"
            }
        },
        hbullet: {
            chart: {
                baseFontSize: "10",
                chartTopMargin: "0",
                chartBottomMargin: "0",
                gaugeFillMix: "{light+0}",
                targetThickness: "1",
                targetFillPercent: "70",
                majorTMColor: "#979797",
                majorTMNumber: "3",
                showTickValues: "1",
                tickMarkDistance: "0",
                tickValueDistance: "-2",
                showToolTip: "0"
            }
        }
    }
});
