var Converter = (function() {

    // Private stuff up here
    var converterValue = 2.54;


    // Public methods here
    return {
        convertFromPoundsToKIlo: function(weight) {
            var num = parseInt(weight);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = num / converterValue;
            return Math.round(num);
        },

        convertFromMetricToImperial: function(weight) {
           return weight * converterValue;
        }

    }
}())

var Converter1 = (function () {

    // Private stuff up here
    var converterValue = 2.54;


    // Public methods here
    return {
        convertFromPoundsToKIlo: function (weight) {
            var num = parseInt(weight);
            if (isNaN(num) == true) {
                throw new Error("Not a number");
            }
            num = num / converterValue;
            return Math.round(num);
        },

        convertFromMetricToImperial: function (weight) {
            return weight * converterValue;
        }

    }
}())