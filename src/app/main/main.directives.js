'use strict';

angular.module('reelRotten')
.directive('valueSlider', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

	        angular.element(element).slider(scope.$eval(attrs.valueSlider));

		    // $('.btn').on('click', function() {
		    //     var values = $( '#flat-slider' ).slider( 'values' );
		    //     $('.slider-values').val(values);
		    // });
        }
    };
});