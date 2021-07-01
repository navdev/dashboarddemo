'use strict';
$(document).ready(function () {
    dashboard();

    /*Counter Js Starts*/
    $('.counter').counterUp({
        delay: 10,
        time: 400
    });
    /*Counter Js Ends*/

    //  Resource bar
    $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4, 2, 1, 5], {
        type: 'bar',
        barWidth: '15px',
        height: '80px',
        barColor: '#fff',
        tooltipClassname: 'abc'
    });

    function setHeight() {
        var $window = $(window);
        var windowHeight = $(window).height();
        if ($window.width() >= 320) {
            $('.user-list').parent().parent().css('min-height', windowHeight);
            $('.chat-window-inner-content').css('max-height', windowHeight);
            $('.user-list').parent().parent().css('right', -300);
        }
    };
    setHeight();

    $(window).on('load', function () {
        setHeight();
    });
});

$(window).resize(function () {
    dashboard();
    //  Resource bar
    $(".resource-barchart").sparkline([5, 6, 2, 4, 9, 1, 2, 8, 3, 6, 4, 2, 1, 5], {
        type: 'bar',
        barWidth: '15px',
        height: '80px',
        barColor: '#fff',
        tooltipClassname: 'abc'
    });
});

function dashboard() {

};

const barChart = document.getElementById('barchart');
if (barChart) {
    Highcharts.chart('barchart', {
        title: {
            text: 'Combination chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums']
        },
        labels: {
            items: [{
                html: 'Total fruit consumption',
                style: {
                    left: '130px',
                    top: '18px',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }]
        },
        series: [{
            type: 'column',
            name: 'Jane',
            data: [3, 2, 1, 3, 4],
            color: '#f57c00'
        }, {
            type: 'column',
            name: 'John',
            data: [4, 3, 5, 7, 6],
            color: '#2BBBAD'
        }, {
            type: 'column',
            name: 'Joe',
            data: [3, 4, 2, 9, 5],
            color: '#39444e'
        }, {
            type: 'spline',
            name: 'Average',
            data: [3.5, 2.67, 3, 6.33, 3.33],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white'
            }
        }, {
            type: 'pie',
            name: 'Total consumption',
            data: [{
                name: 'Jane',
                y: 13,
                color: '#f57c00'
            }, {
                name: 'John',
                y: 23,
                color: '#2BBBAD'
            }, {
                name: 'Joe',
                y: 19,
                color: '#39444e'
            }],
            center: [40, 20],
            size: 100,
            showInLegend: false,
            dataLabels: {
                enabled: false
            }
        }]
    });
}
const pieChart = document.getElementById('barchart');
if (pieChart) {

    Highcharts.chart('piechart', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
            //  backgroundColor:'#fff'
        },
        title: {
            text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                {
                    name: 'Firefox',
                    y: 40.0,
                    sliced: true,
                    selected: true,
                    color: '#2BBBAD'
                },
                {
                    name: 'IE',
                    y: 26.8,
                    color: '#39444e'
                },
                {
                    name: 'Chrome',
                    y: 12.8,
                    color: '#2196F3'
                },
                {
                    name: 'Safari',
                    y: 8.5,
                    color: '#3F729B'
                },
                {
                    name: 'Opera',
                    y: 6.2,
                    color: '#f57c00'
                },
                {
                    name: 'Others',
                    y: 5.7,
                    color: '#aa66cc'
                }
            ]
        }]
    });
}

function frequencyGauge() {
    var opts = {
        angle: 0,
        lineWidth: 0.33,
        radiusScale: 1,
        pointer: {
            length: 0.5,
            strokeWidth: 0.05,
            color: '#000000'
        },
        staticLabels: {
            font: "10px sans-serif",
            labels: [47.5, 50, 52.5],
            fractionDigits: 1
        },
        staticZones: [
            { strokeStyle: "#F03E3E", min: 40, max: 47.5 },
            { strokeStyle: "#7FFF00", min: 47.5, max: 52.5 },
            { strokeStyle: "#F03E3E", min: 52.5, max: 60 }
        ],
        limitMax: false,
        limitMin: false,
        highDpiSupport: true,
        // renderTicks is Optional
        renderTicks: {
            divisions: 6,
            divWidth: 1.5,
            divLength: 0.58,
            divColor: '#333333',
            subDivisions: 3,
            subLength: 0.32,
            subWidth: 0.6,
            subColor: '#666666'
        }
    };
    var target = document.getElementById('frequencyGauge');
    if (target) {
        var gauge = new Gauge(target).setOptions(opts);
        gauge.maxValue = 60;
        gauge.setMinValue(40);
        gauge.set(50);
    }
}

frequencyGauge();

function gaugeBuilder() {
    const refs = [...document.querySelectorAll(`[data-visualization*="gauge"]`)];
    refs.forEach(target => {
        var dataString = target.dataset.renderdata;
        var data = JSON.parse(dataString);
        console.log(data);
        const opts = {
            angle: 0,
            lineWidth: 0.33,
            radiusScale: 1,
            pointer: {
                length: 0.5,
                strokeWidth: 0.05,
                color: '#000000'
            },
            staticLabels: {
                font: "10px sans-serif",
                labels: data.labels,
                fractionDigits: data.fractionDigits
            },
            limitMax: false,
            limitMin: false,
            highDpiSupport: true,
            colorStart: data.colorStart,   // Colors
            colorStop: data.colorStop,    // just experiment with them
            strokeColor: data.strokeColor,  // to see which ones work best for you
            // renderTicks is Optional
            renderTicks: {
                divisions: data.ticks.divisions,
                divWidth: 1.5,
                divLength: 0.58,
                divColor: '#333333',
                subDivisions: data.ticks.subDivisions,
                subLength: 0.32,
                subWidth: 0.6,
                subColor: '#666666'
            }
        };

        var gauge = new Gauge(target).setOptions(opts);
        gauge.maxValue = data.maxValue;
        gauge.setMinValue(data.minValue);
        gauge.set(data.currentValue);
    });
}
gaugeBuilder();