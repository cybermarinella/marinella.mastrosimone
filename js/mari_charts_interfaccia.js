$("html").click(function(){
    $('.sfoca').removeClass('css-filters-gray');
    $('#chart-A1').removeClass('css-filters-gray opacity_40');
    $('#chart-A2').removeClass('css-filters-gray opacity_40');
    $('#chart-A3').removeClass('css-filters-gray opacity_40');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(true, true);
    });
    chart.redraw();
});

      
  
$('area#UserExperience').on('mouseover', function(event) {
    event.stopPropagation();
    $('.all').hide();
    $('.blue').show();
    $('.sfoca').addClass('css-filters-gray');
    $('#chart-A1').removeClass('opacity_40 css-filters-gray');
    $('#chart-A1').removeClass('opacity_40 css-filters-gray ');
    $('#chart-A2').addClass('opacity_40 css-filters-gray');
    $('#chart-A3').addClass('opacity_40 css-filters-gray');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(false, false);
    });
    chart.series[2].show();
    chart.redraw();
});
$('area#UserExperience').on('mouseout', function(event) {
    event.stopPropagation();
    $('.blue').hide();
    $('.all').show();
    $('.sfoca').removeClass('css-filters-gray');
    $('#chart-A1').removeClass('css-filters-gray opacity_40');
    $('#chart-A2').removeClass('css-filters-gray opacity_40');
    $('#chart-A3').removeClass('css-filters-gray opacity_40');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(true, true);
    });
    chart.redraw();
});

$('area#Grafica').on('mouseover', function(event) {
    event.stopPropagation();
    $('.all').hide();
    $('.green').show();
    $('.sfoca').addClass('css-filters-gray');
    $('#chart-A1').addClass('opacity_40 css-filters-gray');
    $('#chart-A2').removeClass('opacity_40 css-filters-gray');
    $('#chart-A3').addClass('opacity_40 css-filters-gray');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(false, false);
    });
    chart.series[1].show();
    chart.redraw();
});
$('area#Grafica').on('mouseout', function(event) {
    event.stopPropagation();
    $('.all').show();
    $('.green').hide();
    $('.sfoca').removeClass('css-filters-gray');
    $('#chart-A1').removeClass('css-filters-gray opacity_40');
    $('#chart-A2').removeClass('css-filters-gray opacity_40');
    $('#chart-A3').removeClass('css-filters-gray opacity_40');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(true, true);
    });
    chart.redraw();
});

$('area#Sviluppo').on('mouseover', function() {
    event.stopPropagation();
    $('.red').show();
    $('.all').hide();
    $('.sfoca').addClass('css-filters-gray');
    $('#chart-A1').addClass('opacity_40 css-filters-gray');
    $('#chart-A2').addClass('opacity_40 css-filters-gray');
    $('#chart-A3').removeClass('opacity_40 css-filters-gray');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(false, false);
    });
    chart.series[0].show();
    chart.redraw();
});
$('area#Sviluppo').on('mouseout', function(event) {
    event.stopPropagation();
    $('.all').show();
    $('.red').hide();
    $('.sfoca').removeClass('css-filters-gray');
    $('#chart-A1').removeClass('css-filters-gray opacity_40');
    $('#chart-A2').removeClass('css-filters-gray opacity_40');
    $('#chart-A3').removeClass('css-filters-gray opacity_40');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(true, true);
    });
    chart.redraw();
});