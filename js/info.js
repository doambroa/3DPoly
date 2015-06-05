$(function() 
{
	 $("#infoBox")
	.css( 
	{
	   "background":"rgba(255,255,255,0.5)"
	})
	.dialog({ autoOpen: false, 
		show: { effect: 'fade', duration: 500 },
		hide: { effect: 'fade', duration: 500 } 
	});
	
	 $("#infoButton")
       .text("") // lo ponemos vacío
	.css(
	{ "z-index":"2",
	  "background":"rgba(0,0,0,0)", "opacity":"0.9", 
	  "position":"absolute", "top":"4px", "left":"4px"
	}) // añadimos el CSS
    .append("<img width='64' height='64' src='images/infoCubo.png'/>")
    .button()
	.click( //y la función onClick()
		function() 
		{ 
			$("#infoBox").dialog("open");
		});
});