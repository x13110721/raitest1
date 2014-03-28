window._skel_config = {
    prefix: 'css/style',
    preloadStyleSheets: true,
    resetCSS: true,
    boxModel: 'border',
    grid: { gutters: 30 },
    breakpoints: {
        wide: { range: '1200-', containers: 1140, grid: { gutters: 50 } },
        narrow: { range: '481-1199', containers: 960 },
        mobile: { range: '-480', containers: 'fluid', lockViewport: true, grid: { collapse: true } }
    }
};

$(document).ready(function () {
    $("#convertbutton").click(function () {
        var metricValue = $("#metricinput").val();
        var imperialValue = $("#imperialinput").val();


        if (((metricValue.length != 0) && (imperialValue.length != 0))
            || ((metricValue.length == 0) && imperialValue.length == 0)) { //cHECK IF THE TEXTBOX IS EMPTY
            alert("Please set one field to convert")
        }
        if (metricValue.length != 0) {
            $("#imperialinput").val(Converter.convertFromPoundsToKIlo(metricValue));
        }
        else if (imperialValue.length != 0) {
            $("#metricinput").val(Converter.convertFromMetricToImperial(imperialValue));
        }
    });
    $("#clearbutton").click(function () {
        $("#imperialinput").val('');
        $("#metricinput").val('');
    });

});

$(document).ready(function () {
    $("#convertbutton1").click(function () {
        var metricValue1 = $("#metricinput1").val();
        var imperialValue1 = $("#imperialinput1").val();


        if (((metricValue1.length != 0) && (imperialValue1.length != 0))
            || ((metricValue1.length == 0) && imperialValue1.length == 0)) { //cHECK IF THE TEXTBOX IS EMPTY
            alert("Please set one field to convert")
        }
        if (metricValue1.length != 0) {
            $("#imperialinput1").val(Converter1.convertFromPoundsToKIlo(metricValue1));
        }
        else if (imperialValue1.length != 0) {
            $("#metricinput1").val(Converter1.convertFromMetricToImperial(imperialValue1));
        }
    });
    $("#clearbutton1").click(function () {
        $("#imperialinput1").val('');
        $("#metricinput1").val('');
    });

});

