/**
 * This file creates a global variable called "companyMonitorData"
 * It is an object the groups the data based on the type of charts we will
 * be using.
 *
 * companyMonitorData = {
 *  targets: [{
 *      // data for first target section
 *  }, {
 *      // data for second taget section
 *  }],
 *  revenues: [{
 *      // data for first revenue section
 *  }],
 *  investors: [{
 *      // data for first investor section
 *  }]
 * }
 */
var companyMonitorData = {
    targets: [{
        id: "targetRevenue",
        dataSource: {
            chart: {
                theme: "company-monitor",
                lowerlimit: "0",
                upperlimit: "100",
                numberprefix: "$",
                formatnumberscale: "1"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "8000000"
                }, {
                    minvalue: "8000000",
                    maxvalue: "16000000"
                }, {
                    minvalue: "16000000",
                    maxvalue: "27000000"
                }]
            },
            value: "24161700",
            target: "24500000"
        }
    }, {
        id: "targetProfit",
        dataSource: {
            chart: {
                theme: "company-monitor",
                palette: "1",
                lowerlimit: "0",
                upperlimit: "30",
                numbersuffix: "%",
                majortmnumber: "3"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "20"
                }, {
                    minvalue: "20",
                    maxvalue: "25"
                }, {
                    minvalue: "25",
                    maxvalue: "30"
                }]
            },
            value: "22",
            target: "26"
        }
    }, {
        id: "targetOrder",
        dataSource: {
            chart: {
                theme: "company-monitor",
                palette: "1",
                lowerlimit: "0",
                upperlimit: "600",
                numberprefix: "$"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "350"
                }, {
                    minvalue: "350",
                    maxvalue: "500"
                }, {
                    minvalue: "500",
                    maxvalue: "600"
                }]
            },
            value: "320",
            target: "550"
        }
    }, {
        id: "targetNewcustomers",
        dataSource: {
            chart: {
                theme: "company-monitor",
                palette: "1",
                lowerlimit: "0",
                upperlimit: "2000"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "1200"
                }, {
                    minvalue: "1200",
                    maxvalue: "1800"
                }, {
                    minvalue: "1800",
                    maxvalue: "2000"
                }]
            },
            value: "1700",
            target: "1900"
        }
    }, {
        id: "targetCustomerSat",
        dataSource: {
            chart: {
                theme: "company-monitor",
                palette: "1",
                lowerlimit: "0",
                upperlimit: "5"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "3.5"
                }, {
                    minvalue: "3.5",
                    maxvalue: "4.5"
                }, {
                    minvalue: "4.5",
                    maxvalue: "5"
                }]
            },
            value: "4.7",
            target: "4.6"
        }
    }, {
        id: "targetAttrition",
        dataSource: {
            chart: {
                theme: "company-monitor",
                lowerlimit: "0",
                upperlimit: "50",
                numbersuffix: "%",
                majorTMNumber: "6"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "15"
                }, {
                    minvalue: "15",
                    maxvalue: "30"
                }, {
                    minvalue: "30",
                    maxvalue: "50"
                }]
            },
            value: "18",
            target: "12"
        }
    }, {
        id: "targetWage",
        dataSource: {
            chart: {
                theme: "company-monitor",
                lowerlimit: "0",
                upperlimit: "50",
                numbersuffix: "%",
                majorTMNumber: "6"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "15"
                }, {
                    minvalue: "15",
                    maxvalue: "30"
                }, {
                    minvalue: "30",
                    maxvalue: "50"
                }]
            },
            value: "13",
            target: "11"

        }
    }, {
        id: "targetSale",
        dataSource: {
            chart: {
                theme: "company-monitor",
                lowerlimit: "0",
                upperlimit: "80",
                numberprefix: "$",
                majorTMNumber: "5"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "50"
                }, {
                    minvalue: "50",
                    maxvalue: "80"
                }]
            },
            value: "60",
            target: "42"
        }
    }, {
        id: "targetDownload",
        dataSource: {
            chart: {
                theme: "company-monitor",
                lowerlimit: "0",
                upperlimit: "20",
                numberprefix: "$",
                majorTMNumber: "5"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "10"
                }, {
                    minvalue: "10",
                    maxvalue: "20"
                }]
            },
            value: "7",
            target: "7.5"
        }
    }, {
        id: "targetLead",
        dataSource: {
            chart: {
                theme: "company-monitor",
                lowerlimit: "0",
                upperlimit: "10",
                numberprefix: "$",
                majorTMNumber: "5"
            },
            colorrange: {
                color: [{
                    minvalue: "0",
                    maxvalue: "3"
                }, {
                    minvalue: "3",
                    maxvalue: "10"
                }]
            },
            value: "2",
            target: "1.6"
        }
    }],
    revenues: [{
        id: "revenueTotal",
        dataSource: {
            chart: {
                theme: "company-monitor",
                numberprefix: "$",
                decimals: "0"
            },
            dataset: [{
                data: [{
                    value: "1634200"
                }, {
                    value: "1756700"
                }, {
                    value: "1875600"
                }, {
                    value: "1976700"
                }, {
                    value: "1965500"
                }, {
                    value: "2034200"
                }, {
                    value: "1956700"
                }, {
                    value: "2075600"
                }, {
                    value: "2176700"
                }, {
                    value: "2265500"
                }, {
                    value: "2676700"
                }, {
                    value: "1765500"
                }]
            }]
        }
    }, {
        id: "revenueProduct",
        dataSource: {
            chart: {
                theme: "company-monitor",
                numberprefix: "$",
                decimals: "0"
            },
            dataset: [{
                data: [{
                    value: "1100500"
                }, {
                    value: "1200000"
                }, {
                    value: "1300000"
                }, {
                    value: "1300000"
                }, {
                    value: "1300000"
                }, {
                    value: "1400000"
                }, {
                    value: "1300000"
                }, {
                    value: "1400000"
                }, {
                    value: "1400000"
                }, {
                    value: "1400000"
                }, {
                    value: "1700000"
                }, {
                    value: "1100000"
                }]
            }]
        }
    }, {
        id: "revenueService",
        dataSource: {
            chart: {
                theme: "company-monitor",
                numberprefix: "$",
                decimals: "0"
            },
            dataset: [{
                data: [{
                    value: "534200"
                }, {
                    value: "556700"
                }, {
                    value: "575600"
                }, {
                    value: "676700"
                }, {
                    value: "665500"
                }, {
                    value: "634200"
                }, {
                    value: "656700"
                }, {
                    value: "675600"
                }, {
                    value: "776700"
                }, {
                    value: "865500"
                }, {
                    value: "976700"
                }, {
                    value: "665500"
                }]
            }]
        }
    }],
    investors: [{
        id: "investorsCisco",
        dataSource: {
            chart: {
                theme: "company-monitor"
            },
            dataset: [{
                data: [{
                    value: "38.42"
                }, {
                    value: "41.43"
                }, {
                    value: "34.78"
                }, {
                    value: "40.67"
                }, {
                    value: "44.12"
                }, {
                    value: "38.45"
                }, {
                    value: "40.71"
                }, {
                    value: "49.90"
                }, {
                    value: "40.12"
                }, {
                    value: "34.91"
                }, {
                    value: "42.02"
                }, {
                    value: "35.21"
                }, {
                    value: "43.31"
                }, {
                    value: "40.21"
                }, {
                    value: "40.54"
                }, {
                    value: "40.90"
                }, {
                    value: "54.21"
                }, {
                    value: "41.90"
                }, {
                    value: "33.43"
                }, {
                    value: "46.73"
                }, {
                    value: "50.42"
                }, {
                    value: "40.74"
                }, {
                    value: "42.31"
                }, {
                    value: "50.39"
                }, {
                    value: "51.10"
                }, {
                    value: "44.84"
                }, {
                    value: "51.64"
                }, {
                    value: "47.62"
                }, {
                    value: "39.61"
                }, {
                    value: "35.13"
                }]
            }]
        }
    }, {
        id: "investorsGoogle",
        dataSource: {
            chart: {
                theme: "company-monitor"
            },
            dataset: [{
                data: [{
                    value: "23.41"
                }, {
                    value: "31.43"
                }, {
                    value: "34.78"
                }, {
                    value: "36.67"
                }, {
                    value: "44.12"
                }, {
                    value: "38.45"
                }, {
                    value: "30.71"
                }, {
                    value: "46.90"
                }, {
                    value: "55.12"
                }, {
                    value: "34.91"
                }, {
                    value: "39.02"
                }, {
                    value: "51.21"
                }, {
                    value: "34.31"
                }, {
                    value: "44.21"
                }, {
                    value: "34.54"
                }, {
                    value: "26.90"
                }, {
                    value: "44.21"
                }, {
                    value: "51.90"
                }, {
                    value: "33.43"
                }, {
                    value: "46.73"
                }, {
                    value: "35.42"
                }, {
                    value: "44.74"
                }, {
                    value: "39.31"
                }, {
                    value: "42.39"
                }, {
                    value: "30.10"
                }, {
                    value: "34.84"
                }, {
                    value: "35.64"
                }, {
                    value: "46.62"
                }, {
                    value: "50.61"
                }, {
                    value: "46.31"
                }]
            }]
        }
    }, {
        id: "investorsMicrosoft",
        dataSource: {
            chart: {
                theme: "company-monitor"
            },
            dataset: [{
                data: [{
                    value: "34.45"
                }, {
                    value: "44.76"
                }, {
                    value: "34.78"
                }, {
                    value: "56.67"
                }, {
                    value: "44.12"
                }, {
                    value: "98.45"
                }, {
                    value: "23.71"
                }, {
                    value: "46.90"
                }, {
                    value: "65.12"
                }, {
                    value: "64.91"
                }, {
                    value: "34.02"
                }, {
                    value: "31.21"
                }, {
                    value: "34.31"
                }, {
                    value: "44.21"
                }, {
                    value: "34.54"
                }, {
                    value: "76.90"
                }, {
                    value: "44.21"
                }, {
                    value: "91.90"
                }, {
                    value: "23.43"
                }, {
                    value: "46.73"
                }, {
                    value: "65.42"
                }, {
                    value: "64.74"
                }, {
                    value: "34.31"
                }, {
                    value: "34.39"
                }, {
                    value: "34.10"
                }, {
                    value: "44.84"
                }, {
                    value: "34.64"
                }, {
                    value: "76.62"
                }, {
                    value: "44.61"
                }, {
                    value: "96.71"
                }]
            }]
        }
    }, {
        id: "investorsOracle",
        dataSource: {
            chart: {
                theme: "company-monitor"
            },
            dataset: [{
                data: [{
                    value: "33.52"
                }, {
                    value: "51.43"
                }, {
                    value: "44.78"
                }, {
                    value: "46.67"
                }, {
                    value: "54.12"
                }, {
                    value: "38.45"
                }, {
                    value: "50.71"
                }, {
                    value: "46.90"
                }, {
                    value: "45.12"
                }, {
                    value: "34.91"
                }, {
                    value: "39.02"
                }, {
                    value: "41.21"
                }, {
                    value: "38.31"
                }, {
                    value: "42.21"
                }, {
                    value: "30.54"
                }, {
                    value: "46.90"
                }, {
                    value: "64.21"
                }, {
                    value: "51.90"
                }, {
                    value: "53.43"
                }, {
                    value: "66.73"
                }, {
                    value: "55.42"
                }, {
                    value: "49.74"
                }, {
                    value: "42.31"
                }, {
                    value: "40.39"
                }, {
                    value: "50.10"
                }, {
                    value: "44.84"
                }, {
                    value: "55.64"
                }, {
                    value: "40.62"
                }, {
                    value: "50.61"
                }, {
                    value: "40.68"
                }]
            }]
        }
    }]
};