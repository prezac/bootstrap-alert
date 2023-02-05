var showAlert = function(message,header,type,icon,closeDelay) {
   if ($("#pr-alert").length == 0) {
      type = type || "info";
      $('body').append('<div class="modal" data-backdrop="static" tabindex="-1" id="pr-alert">'+
        '<div class="modal-dialog">'+
		'<div class="modal-content alert alert-'+type+'">'+
			'<div class="modal-header">'+
				'<div class="icon hidden-xs"><i class="'+icon+'"></i></div><strong class="ml-1">'+header+'</strong>'+
		               '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
			'</div>'+
			'<div class="modal-body">'+
                  		message+
              		'</div>'+
	        '</div>'+
	'</div></div>');

    } else {
        $("#pr-alert .modal-body").text(message);
    }
    $("#pr-alert").modal();
    if (closeDelay){
	window.setTimeout(function(){ $('#pr-alert').modal('hide');  }, closeDelay);
    }
}


showAlert("Chyba","Upozornění","danger","fa fa-info-circle",5000);
