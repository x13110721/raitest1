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

function convert2() {
    var metricValue1 = $("#metricinput1").val();
    var imperialValue1 = $("#imperialinput1").val();


    if (((metricValue.length1 != 0) && (imperialValue1.length != 0))
        || ((metricValue1.length == 0) && imperialValue1.length == 0)) { //cHECK IF THE TEXTBOX IS EMPTY
        alert("Please set one field to convert")
    }
    if (metricValue.length1 != 0) {
        $("#imperialinput1").val(Converter1.convertFromPoundsToKIlo(metricValue1));
    }
    else if (imperialValue1.length != 0) {
        $("#metricinput1").val(Converter1.convertFromMetricToImperial(imperialValue1));
    }

    $("#clearbutton1").click(function () {
        $("#imperialinput1").val('');
        $("#metricinput1").val('');
    });



}