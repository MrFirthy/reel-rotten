'use strict';

angular.module('reelRotten')
.directive('slider', function () {

    return {
        templateUrl : 'app/components/slider/slider.html',
        replace     : true,
        restrict    : 'A',

        scope: {
			min 	: '=',
			max 	: '=',
			range 	: '=',
			values  : '='
		},

        link: function postLink(scope, element, attrs, ngModel) {
			console.log(element);

			jQuery.extend( jQuery.ui.slider.prototype.options, {
				animate: 300
			});

			element.slider({
				min 	: scope.min,
				max 	: scope.max,
				range 	: scope.range,
				values 	: scope.values,
			})

			element.on('slide', function(event, ui) {
				scope.$apply(function () {
					scope.values = ui.values;
				});
			});

				// .slider('pips', {
					//rest: "label"
				// })

				// .slider('float');


			// jQuery('.btn').on('click', function() {
				// var values = jQuery( '#flat-slider' ).slider( 'values' );
				// jQuery('.slider-values').val(values);
			// });
        }
    };
});
