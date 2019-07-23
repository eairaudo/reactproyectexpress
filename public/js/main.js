$(document).ready(function(){
    $("input").keypress(function(e) {
  	if(e.which == 13) {
  	var busqueda = document.getElementById("busqueda").value
    	$.ajax({
    			url: "http://localhost:8080/items?search="+busqueda,
    		 	success: function(result){
            	$("#resultados").html(result);
        		}});
  			}     
    	});
});