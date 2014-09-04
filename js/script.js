
	$(window).load(function(){
		

		//Image parent container is dragable.
		$('#imgContainer').draggable();


		//Image parent container is rotatable.
		$('#imgContainer').rotatable(); 
	   
		$('#rotateCheck').click( function() { 
		    $('.ui-rotatable-handle').toggle();  
		});
	 	

		//check if check box is checked to allow ratio lock. check!
		$('#ratioCheck').click( function() {
		    if($('#ratioCheck').is(":checked"))
		        ratio =false;
		    else
		        ratio = 'preserve';
		    $(".userImage").resizable('destroy').resizable({
		        aspectRatio: ratio,
					minWidth:100,
					minHeight:150
		    });
		});
		$(".userImage").resizable({
			aspectRatio:'preserve',
			minWidth:100,
			minHeight:150
		});	


		
		$('#previewCheck').click( function() { 
			
			//if toggle image rotation is already checked, uncheck it
		     if ($('#rotateCheck').is(':checked')){ 
		    	$('#rotateCheck').attr('checked', false);  
		    } else {
		    	$('.ui-rotatable-handle').toggle();   
		    }

			//set stage to preiveiw mode
		    $('#frame').toggleClass('overflowPreview'); 
		    $('#safeZone').toggleClass('hide'); 

		    //grey out other options
			$('#rotationControls').toggleClass('disable'); 
			$('#ratioControls').toggleClass('disable'); 

		    	$('.ui-resizable-se').toggle();   
		    

			        
		});

	}); 