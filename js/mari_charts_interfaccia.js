var isActive = false;

$("body, .content").click(function(){
    // this actions are mooved to index.html
    $('g').attr('class' , '');

    $('.sfoca').removeClass('css-filters-gray');
    $('#chart-A1').removeClass('css-filters-gray opacity_40');
    $('#chart-A2').removeClass('css-filters-gray opacity_40');
    $('#chart-A3').removeClass('css-filters-gray opacity_40');
    
    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(true, true);
    });
});

$('g').on('mouseover', function(event) {
    $('g').attr('class' , 'inactive');
    $(this).attr('class' , ''); 
})
$('g').on('click', function(event) {
    $('g').attr('class' , 'inactive');
    $(this).attr('class' , 'active'); 
})
$('g').on('mouseout', function(event) {
   // $(this).attr('class' , 'inactive');
    //$('.active').attr('class' , 'active');
})
      

$('#UserExperience').on('mouseover', function(event) {
    event.stopPropagation();
});
$('#UserExperience').on('click', function(event) {
    event.stopPropagation();
   
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
});
$('#UserExperience').on('mouseout', function(event) {
    event.stopPropagation();
});

$('#Grafica').on('mouseover', function(event) {
    event.stopPropagation();
});
$('#Grafica').on('click', function(event) {
    event.stopPropagation();

    $('.sfoca').addClass('css-filters-gray');
    $('#chart-A1').addClass('opacity_40 css-filters-gray');
    $('#chart-A2').removeClass('opacity_40 css-filters-gray');
    $('#chart-A3').addClass('opacity_40 css-filters-gray');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(false, false);
    });
    chart.series[1].show();
});
$('#Grafica').on('mouseout', function(event) {
    event.stopPropagation();
});

$('#Sviluppo').on('mouseover', function(event) {
    event.stopPropagation();
});
$('#Sviluppo').on('click', function(event) {
    event.stopPropagation();

    $('.sfoca').addClass('css-filters-gray');
    $('#chart-A1').addClass('opacity_40 css-filters-gray');
    $('#chart-A2').addClass('opacity_40 css-filters-gray');
    $('#chart-A3').removeClass('opacity_40 css-filters-gray');

    var chart = $('#chart-B').highcharts();
    $(chart.series).each(function(){
        this.setVisible(false, false);
    });
    chart.series[0].show();
});
$('#Sviluppo').on('mouseout', function(event) {
    event.stopPropagation();
});