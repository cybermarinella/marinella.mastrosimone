    $(function() {
        var colors = [
        '#3d59a8', '#0e58a5', '#2b96b6', '#54c5cb',
        '#00b442', '#34c420', '#90d30e', '#b9e100',
        '#ff0000', '#f37029', '#f79125', '#ffc31a', 
        '#ef61a3'
        ]

        var grigio = '#444';

    $('#chart-A1').highcharts({
        chart: {
            type: 'bar',
            marginLeft:0,
            marginTop:0,
            marginRight:0
        },
        title: {
            text: ''
            },
            subtitle: {
                text: ''
            },
            series: [{
                name: '',
                data: [
                    {y: 10, color: colors[0], livello: "Per avere buone idee bisogna avere molte idee"},
                    {y: 8, color: colors[1], livello:"Buono"},
                    {y: 9.5, color: colors[2], livello:"Molto Buono"},
                    {y: 8, color: colors[3], livello:"Buono"},
               ],
               colorByPoint: true,
               dataLabels:{
                formatter:function() {
                    return this.point.name;
                    return this.point.livello;
                },
            },
        }],
        xAxis: {
            categories: ['Idea', 'Personas', 'Rapid Prototype', 'Agile Method'],
                labels: {
                    align:'left',
                    x:15,
                    gridLineWidth: 0,
                    style: {
                        fontSize: '1em',
                        fontFamily:'Roboto',
                        textTransform:'uppercase',
                        color:'#fff',
                        whiteSpace: 'nowrap'
                    }
                },
            minorTickLength:0,
            tickLength: 0,
        },
        yAxis: {
            gridLineWidth: 0,
            max: 10,
            title: {
                text: null,
            },
            labels:{
                enabled: false
            }
        },
        plotOptions: {
            series: {
                borderRadius: 12,
                pointPadding: 0.05,
                groupPadding: 0,
                animation: {
                    duration: 2000
                }
            }
        },
        legend: {
            enabled: false
        },
        exporting: { 
          enabled: false 
        },
        credits: {
            enabled: false,
            },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">{point.name}</span><b>{point.livello}</b><br/>',
            shared: true,
            followPointer: true
        },
    });
    $('#chart-A2').highcharts({
        chart: {
            type: 'bar',
            marginLeft:0,
            marginTop:0,
            marginRight:0
        },
        title: {
            text: ''
            },
            subtitle: {
                text: ''
            },
            series: [{
                name: '',
                data: [
                {y: 10, color: colors[4], livello:"Ottimo"},
                {y: 10, color: colors[5], livello:"Ottimo"} ,
                {y: 10, color: colors[6], livello:"Ottimo"},
                {y: 7, color: colors[7], livello:"Discreto"},
               ],
               colorByPoint: true,
               dataLabels:{
                formatter:function() {
                    return this.point.name;
                    return this.point.livello;
                },
            },
        }],
        xAxis: {
            categories: ['User Interface', 'Data Visualization','Stampa', 'Audio/Video',],
                labels: {
                    align:'left',
                    x:15,
                    gridLineWidth: 0,
                    style: {
                        fontSize: '1em',
                        fontFamily:'Roboto',
                        textTransform:'uppercase',
                        color:'#fff',
                        whiteSpace: 'nowrap'
                    }
                },
            minorTickLength:0,
            tickLength: 0,
        },
        yAxis: {
            gridLineWidth: 0,
            max: 10,
            title: {
                text: null,
            },
            labels:{
                enabled: false
            }
        },
        plotOptions: {
            series: {
                borderRadius: 12,
                pointPadding: 0.05,
                groupPadding: 0,
                animation: {
                    duration: 2000
                }
            }
        },
        legend: {
            enabled: false
        },
        exporting: { 
          enabled: false 
        },
        credits: {
            enabled: false,
            },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">{point.name}</span><b>{point.livello}</b><br/>',
            shared: true,
            followPointer: true
        },
    });
    $('#chart-A3').highcharts({
        chart: {
            type: 'bar',
            marginLeft:0,
            marginTop:0,
            marginRight:0
        },
        title: {
            text: ''
            },
            subtitle: {
                text: ''
            },
            series: [{
                name: '',
                data: [
                    {y: 10, color: colors[8], livello:"Ottimo"},
                    {y: 8.5, color: colors[9], livello:"Molto Buono"},
                    {y: 5, color: colors[10], livello:"Discreto"},
                    {y: 10, color: colors[11], livello:"Ottimo"},
               ],
               colorByPoint: true,
               dataLabels:{
                formatter:function() {
                    return this.point.name;
                    return this.point.livello;
                },
            },
        }],
        xAxis: {
            categories: ['Responsive Design', 'Web App', 'Programmazione', 'Cms Template'],
                labels: {
                    align:'left',
                    x:15,
                    gridLineWidth: 0,
                    style: {
                        fontSize: '1em',
                        fontFamily:'Roboto',
                        textTransform:'uppercase',
                        color:'#fff',
                        whiteSpace: 'nowrap'
                    }
                },
            minorTickLength:0,
            tickLength: 0,
        },
        yAxis: {
            gridLineWidth: 0,
            max: 10,
            title: {
                text: null,
            },
            labels:{
                enabled: false
            }
        },
        plotOptions: {
            series: {
                borderRadius: 12,
                pointPadding: 0.05,
                groupPadding: 0,
                animation: {
                    duration: 2000
                }
            }
        },
        legend: {
            enabled: false
        },
        exporting: { 
          enabled: false 
        },
        credits: {
            enabled: false,
            },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">{point.name}</span><b>{point.livello}</b><br/>',
            shared: true,
            followPointer: true
        },
    });

    $('#chart-B').highcharts({
        chart: {
            renderTo: 'container',
            type: 'bubble',
            zoomType: 'xy',
            style: {
                fontFamily: 'Roboto'
            }
        },
        title: {
            text: '' // Title for the chart
        },
        yAxis: {
            gridLineWidth: 0,
            max: 130,
            title: {
                text: null,
            },
            labels:{
                enabled: false
            }
        },
        xAxis: {
            gridLineWidth: 0,
            title: {
                text: null,
            },
            labels:{
                enabled: false
            }
        },
        legend: {
            layout: 'vertical',
            x: 0,
            enabled: false
        },
        plotOptions: {
            series: {
                animation: {
                    duration: 2000,
                    deelay:1500
                }
            }
        },
        exporting: { 
          enabled: false 
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            shared: true,
            useHTML: true,
            fontFamily:'Roboto',
            headerFormat: '<table style="z-index:20; text-transform:uppercase">',
            pointFormat: '<tr><td style="color: {series.color}">{point.name}:</td>' +
            '<td><b> {point.livello}</b></td></tr>',
            footerFormat: '</table>',
            valueDecimals: 0
        },
        series: [{
            dataLabels: {
                enabled: true,
                x:-40,
                formatter:function() {
                    return this.point.name;
                    return this.point.livello;
                },                    
                style:{color:grigio}
            },
                data: [
                    {
                        "x": 108,
                        "y": 54,
                        "z": 100,
                        "name":"Html5, css",
                        "livello":"Ottimo"
                    },{
                        "x": 122,
                        "y": 28,
                        "z": 100,
                        "name":"Wordpress",
                        "livello":"Ottimo"
                    },{
                        "x": 143,
                        "y": 79,
                        "z": 20,
                        "name":"Node Js",
                        "livello":"Discreto"
                    },{
                        "x": 107,
                        "y": 115,
                        "z": 20,
                        "name":"Angular JS",
                        "livello":"Discreto"
                    },{
                        "x": 133,
                        "y": 0,
                        "z": 4,
                        "name":"Javascript",
                        "livello":"Iniziale"
                    },{
                        "x": 110,
                        "y": 30,
                        "z": 90,
                        "name":"jQuery",
                        "livello":"Molto Buono"
                    },{
                        "x": 110,
                        "y": -5,
                        "z": 70,
                        "name":"Php",
                        "livello":"Buono"
                    }
                ],
                name:"Web",
                color: colors[8],
            },{
            dataLabels: {
                enabled: true,
                x:-40,
                formatter:function() {
                return this.point.name;
                },
                style:{color:grigio}
            },
            data: [
                {
                    "x": 46,
                    "y": 0,
                    "z": 70,
                    "name":"Prepress",
                    "livello":"Buono"
                }, {
                    "x": 90,
                    "y": 50,
                    "z": 80,
                    'name':'Photoshop',
                    "livello":"Molto Buono"
                }, {
                    "x": 70,
                    "y": 65,
                    "z": 80,
                    "name":"InDesign",
                    "livello":"Molto Buono"
                }, {
                    "x": 63,
                    "y": 22,
                    "z": 90,
                    "name":"Illustrator",
                    "livello":"Molto Buono"
                }
            ], name:"Stampa", color: colors[4],
            },{
            dataLabels: {
                enabled: true,
                x:-40,
                //useHTML: true,
                formatter:function() {
                return this.point.name;
                },
                style:{color:grigio}
            },
            data: [{
                "x": 90,
                "y": 90,
                "z": 8,
                "name":"After Effects",
                "livello":"Molto Buono"
            }, {
                "x": 90,
                "y": 120,
                "z": 6,
                'name':'Premiere',
                "livello":"Discreto"
            }, {
                "x": 95,
                "y": 140,
                "z": 5,
                "name":"Aebleton Live",
                "livello":"Discreto"
            }], name:"Audio/Video", color: colors[0],
        }],
        showInLegend: true,
    });

    $('#chart-C').highcharts({
        chart: {
            //renderTo: 'container',
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            marginTop: -20,
            marginBottom:-40,
            style: {
                fontFamily: 'Roboto',
                color:'#ccc'
            }
        },
        title: {
            text: '',
        },
        legend: {
            enabled: false
        },
        exporting: { 
            enabled: false 
        },
        credits: {
            enabled: false,
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                },
                series: {
                    allowPointSelect: true
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '70%',
            data: [
            ['Finanza',10.38],
            ['Educational',       56.33],
            ['Software', 24.03],
            ['Healtcare',    4.77],
            ['Legal',     10.91],
            {
                name: '',
                y: 0.2,
                dataLabels: {
                    enabled: false,
                }
            }
            ]
        }]
    });
});