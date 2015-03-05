(function($) {
	document.extruder=new Object();
	$.mbExtruder= {
		buildMbExtruder: function(){
			return this.each (function (){
				var extruder,extruderContent;
				
				extruder= $(this);
				extruderContent=extruder.html();

				var c= $("<div/>").addClass("extruder-content");
				c.append(extruderContent);
				extruder.html(c);

				extruder.addClass("extruder");
				extruder.wrapInner("<div class='ext_wrapper'></div>");

					var container=$("<div>").addClass("text");
					c.wrapInner(container);
			});
		}
	};
	
	$.fn.buildMbExtruder=$.mbExtruder.buildMbExtruder;
	
})(jQuery);
