$(function(){

	var switchNeed = $("input:not('#onoffswitch')");
	switchNeed.prop("disabled",true);
	$("#onoffswitch").click(function(){
		if ($("#onoffswitch").is(':checked')){
			$("input:not('input[type=date]')").prop("disabled",false);
		}else{
			switchNeed.prop("disabled",true);
        }
    });

	$("input[name=tips]").change(function() {
		var yourChoice = $("#yourChoice");
		var theDate = $("input[type=date]");
		if($('#someProduct').is(':checked')){
			yourChoice.show().prop("disabled",false);
		}else{
			yourChoice.prop("disabled",true);
		}
		if($('#sometime').is(':checked')){
			theDate.prop("disabled",false);
		}else{
			theDate.prop("disabled",true);
		}
	});





})