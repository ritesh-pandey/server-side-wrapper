<?php
    include('../fusioncharts.php');
?>
<!--
    Company monitor is a concept dashboard. It is a central place for an 
    organization to get brief statistics about its revenue, profit, 
    customer details and measures conversions and sales.
    
    Widgets used 
        * Horizontal Bullet Graph (hbullet)
        * Spark Column (sparkcolumn)
        * Spark Line (sparkline)
    
    FusionCharts Version 3.4.0
    For further information about the folder structure of dashboard, please read the README.md file.
-->
<!DOCTYPE html>
<html>

<head>
    <title>Company Monitor</title>
    <!-- Include CSS files -->
    <link rel="stylesheet" type="text/css" href="css/reset.css" />
    <!-- Include layout file for dashboard -->
    <link rel="stylesheet" type="text/css" href="css/layout.css" />

    <!-- Include JS files-->
    <!-- Include FusionChart library file -->
    <script defer type="text/javascript" src="fusioncharts/fusioncharts.js"></script>
    <!-- Include theme file for charts -->
    <!--script defer type="text/javascript" src="js/fusioncharts.theme.company-monitor.js"></script-->
    <!-- Include model file -->
    <!--script defer type="text/javascript" src="js/data.js"></script-->
    <!-- Include controller file -->
    <!--script defer type="text/javascript" src="js/dashboard.js"></script-->
    <?php 
        create_chart('../');
    ?>
</head>

<body>
    <!-- The top level wrapper for markup begins -->
    <div id="wrapper">
        <!-- Header section begins -->
        <div class="header">
            <a href="http://www.fusioncharts.com/" class="logo">
                <img width="210" height="38" alt="FusionCharts" src="http://www.fusioncharts.com/theme/210x38xlogo.png.pagespeed.ic.KZD9tJ7qIK.png" />
            </a>
            <a href="/downloads/dashboards/company-monitor.zip" class="download-code-link">Download This Dashboard</a>
        </div>
        <!-- Header section ends -->

        <h2 class="dashboard-heading">Company Monitor</h2>
        <!-- Container for the dashboard begins -->
        <div id="container">
            <!-- Company Monitor Target section begins -->
            <table id="companyMonitorTable" class="company-monitor-table">
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th class="target-reach">Target Reach</th>
                        <th>Actual</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Revenue</td>
                        <td class="chart-wrap">
                            <div id="targetRevenueContainer"></div>
                        </td>
                        <td>$24.16M</td>
                    </tr>
                    <tr>
                        <td>Profit</td>
                        <td class="chart-wrap">
                            <div id="targetProfitContainer"></div>
                        </td>
                        <td>22%</td>
                    </tr>
                    <tr>
                        <td>Avg. Order Size</td>
                        <td class="chart-wrap">
                            <div id="targetOrderContainer"></div>
                        </td>
                        <td>$320</td>
                    </tr>
                    <tr>
                        <td>New Customers</td>
                        <td class="chart-wrap">
                            <div id="targetNewcustomersContainer"></div>
                        </td>
                        <td>1700</td>
                    </tr>
                    <tr>
                        <td>Customer Satisfaction</td>
                        <td class="chart-wrap">
                            <div id="targetCustomerSatContainer"></div>
                        </td>
                        <td>4.7</td>
                    </tr>
                    <tr>
                        <td>Attrition Rate</td>
                        <td class="chart-wrap">
                            <div id="targetAttritionContainer"></div>
                        </td>
                        <td>18%</td>
                    </tr>
                    <tr>
                        <td>Wage Increase</td>
                        <td class="chart-wrap">
                            <div id="targetWageContainer"></div>
                        </td>
                        <td>13%</td>
                    </tr>
                    <tr>
                        <td>Cost per Sale</td>
                        <td class="chart-wrap">
                            <div id="targetSaleContainer"></div>
                        </td>
                        <td>$60</td>
                    </tr>
                    <tr>
                        <td>Cost per Download</td>
                        <td class="chart-wrap">
                            <div id="targetDownloadContainer"></div>
                        </td>
                        <td>$7</td>
                    </tr>
                    <tr>
                        <td>Cost per Lead</td>
                        <td class="chart-wrap">
                            <div id="targetLeadContainer"></div>
                        </td>
                        <td>$2</td>
                    </tr>
                </tbody>
            </table>
            <!-- Company Monitor Target section ends -->

            <!-- Company Monitor Revenue section begins -->
            <table id="revenueMonitorTable">
                <thead>
                    <th>&nbsp;</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Total Monthly Revenue</td>
                        <td>Monthly Product Revenue</td>
                        <td>Monthly Service Revenue</td>
                    </tr>
                    <tr>
                        <td class="revenue-monitor-table-right-border-cell">
                            <div id="revenueTotalContainer"></div>
                        </td>
                        <td class="revenue-monitor-table-right-border-cell">
                            <div id="revenueProductContainer"></div>
                        </td>
                        <td>
                            <div id="revenueServiceContainer"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="revenue-monitor-table-number">3.33</span>
                            <span class="revenue-monitor-table-number-definition">Million</span>
                        </td>
                        <td>
                            <span class="revenue-monitor-table-number">1.32</span>
                            <span class="revenue-monitor-table-number-definition">Million</span>
                        </td>
                        <td>
                            <span class="revenue-monitor-table-number">0.69</span>
                            <span class="revenue-monitor-table-number-definition">Million</span>
                        </td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <!-- Company Monitor Revenue section ends -->

            <!-- Company Monitor Recent Investors section begins -->
            <h2 class="recent-investor-monitor-heading">Recent Investor Monitor</h2>
            <table id="investorMonitorTable">
                <thead></thead>
                <tbody>
                    <tr>
                        <td colspan="3">Investor</td>
                        <td colspan="4">24th Feb, 2014</td>
                        <td colspan="1"></td>
                        <td colspan="5" class="investment-end-date">24th June, 2014</td>
                        <td colspan="3">Low</td>
                        <td colspan="3">High</td>
                        <td colspan="2"></td>
                    </tr>

                    <tr>
                        <td colspan="3">Cisco</td>
                        <td colspan="3">38.42</td>
                        <td colspan="3" class="investor-chart-container">
                            <div id="investorsCiscoContainer"></div>
                        </td>
                        <td colspan="2">35.13</td>
                        <td class="investor-monitor-table-column-low" colspan="4">33.43</td>
                        <td class="investor-monitor-table-column-high" colspan="3">54.21</td>
                    </tr>
                    <tr>
                        <td colspan="3">Google</td>
                        <td colspan="3">23.41</td>
                        <td colspan="3" class="investor-chart-container">
                            <div id="investorsGoogleContainer"></div>
                        </td>
                        <td colspan="2">46.31</td>
                        <td class="investor-monitor-table-column-low" colspan="4">23.41</td>
                        <td class="investor-monitor-table-column-high" colspan="3">55.12</td>
                    </tr>
                    <tr>
                        <td colspan="3">Microsoft</td>
                        <td colspan="3">34.35</td>
                        <td colspan="3" class="investor-chart-container">
                            <div id="investorsMicrosoftContainer"></div>
                        </td>
                        <td colspan="2">96.71</td>
                        <td class="investor-monitor-table-column-low" colspan="4">23.43</td>
                        <td class="investor-monitor-table-column-high" colspan="3">98.45</td>
                    </tr>
                    <tr>
                        <td colspan="3">Oracle</td>
                        <td colspan="3">33.52</td>
                        <td colspan="3" class="investor-chart-container">
                            <div id="investorsOracleContainer"></div>
                        </td>
                        <td colspan="2">40.68</td>
                        <td class="investor-monitor-table-column-low" colspan="4">30.54</td>
                        <td class="investor-monitor-table-column-high" colspan="3">66.73</td>
                    </tr>

                    <!-- Virtual row to manage the different table-data(td) -->
                    <tr class="table-virtual-row">
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                        <td width="5%"></td>
                    </tr>

                </tbody>
            </table>
            <!-- Company Monitor Recent Investors section ends -->
        </div>
        <!-- Container for the dashboard ends -->

        <!-- The footer begins -->
        <div class="footer">
            <p>This dashboard application uses <a href="/download/">FusionCharts Suite XT</a>
            </p>
            <p>&copy; 2014, FusionCharts. All rights reserved.</p>
        </div>
        <!-- The footer ends -->
    </div>
    <!-- The top level wrapper for markup ends -->
</body>

</html>
