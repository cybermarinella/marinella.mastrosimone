    $(function() {
        var colors = [
        '#3d59a8', '#0e58a5', '#2b96b6', '#54c5cb',
        '#01a84e', '#34c420', '#90d30e', '#b9e100',
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
                    {y: 10, color: colors[0], livello: "Per avere buone idee <br> bisogna avere molte idee"},
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
            lineWidth:0,
            style: {
                //fontFamily: 'Roboto',
                //fontWeight:100;
            }
        },
        title: {
            text: '' // Title for the chart
        },
        yAxis: {
            gridLineWidth: 0,
            title: {
                text: null,
            },
            labels:{
                enabled: false
            }
        },
        xAxis: {
            gridLineWidth: 0,
            lineWidth: 0,
            tickLength: 0,
            minorTickLength: 0,
            minorGridLineWidth: 0,
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
            bubble:{
              marker: {
                lineWidth:0,
                fillOpacity: 0.8
                }
              },
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
            pointFormat: '<tr><td>{point.name}:</td></tr>' + '<td><b> {point.livello}</b></td></tr>',
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
                        "x": 200,
                        "y": 54,
                        "z": 50,
                        "name":"Html5, Sass, Less",
                        "livello":"Ottimo"
                    },{
                        "x": 240,
                        "y": 28,
                        "z": 50,
                        "name":"Wordpress",
                        "livello":"Ottimo"
                    },{
                        "x": 180,
                        "y": 30,
                        "z": 7,
                        "name":"Node Js",
                        "livello":"Discreto"
                    },{
                        "x": 200,
                        "y": 10,
                        "z": 7,
                        "name":"Angular JS",
                        "livello":"Discreto"
                    },{
                        "x": 220,
                        "y": 0,
                        "z": 8,
                        "name":"Javascript",
                        "livello":"In Avanzamento"
                    },{
                        "x": 230,
                        "y": 70,
                        "z": 30,
                        "name":"MySql",
                        "livello":"Molto Buono"
                    },{
                        "x": 210,
                        "y": 20,
                        "z": 25,
                        "name":"jQuery",
                        "livello":"Molto Buono"
                    },{
                        "x": 250,
                        "y": 54,
                        "z": 35,
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
                    "x": 140,
                    "y": 10,
                    "z": 50,
                    "name":"Prepress",
                    "livello":"Buono"
                }, 
                {
                    "x": 160,
                    "y": 10,
                    "z": 50,
                    "name":"Acrobat Pro",
                    "livello":"Buono"
                }, {
                    "x": 140,
                    "y": 50,
                    "z": 50,
                    'name':'Photoshop',
                    "livello":"Molto Buono"
                }, {
                    "x": 120,
                    "y": 30,
                    "z": 55,
                    "name":"InDesign",
                    "livello":"Molto Buono"
                }, {
                    "x": 150,
                    "y": 60,
                    "z": 60,
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
                "x": 133,
                "y": 90,
                "z": 10,
                "name":"After Effects",
                "livello":"Buono"
            }, {
                "x": 150,
                "y": 120,
                "z": 9,
                'name':'Premiere',
                "livello":"Discreto"
            }, {
                "x": 130,
                "y": 65,
                "z": 28,
                'name':'Balsamiq',
                "livello":"Ottimo"
            }, {
                "x": 150,
                "y": 80,
                "z": 25,
                'name':'UXPin',
                "livello":"Ottimo"
            }, {
                "x": 150,
                "y": 50,
                "z": 25,
                'name':'Invision',
                "livello":"Ottimo"
            }, {
                "x": 100,
                "y": 120,
                "z": 7,
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
            useHTML: true,
            headerFormat: '<table style="z-index:20; text-transform:uppercase">',
            pointFormat: '<tr><td>{point.name}:</td></tr>' + '<td><b>{point.percentage:.1f}% </b></td></tr>',
            footerFormat: '</table>',
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
            name: '',
            innerSize: '70%',

            data: [
            ['Healtcare', 5 ],
            ['Legal', 10],
            ['Finanza',35],
            ['Istruzione',10],
            ['Software', 20],
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

