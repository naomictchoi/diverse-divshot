/**
*
* Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
* Requires jQuery and raphael.js
*
* Map of 'Asia1'

* @author author
*/
(function($) {
	$.extend(true, $.fn.mapael, 
		{
			maps :{
				asia1 : {
					width : 206.74792,
					height : 136.87778,
					getCoords : function (lat, lon) {
						// todo
						return {"x" : lat, "y" : lon};
					},
					elems : {
/* Unable to find the paths data in the SVG file (<path (...) d="{data}" (...) /> */
					}
				}
			}
		}
	);
})(jQuery);