
	$(window).load(function(){
		

		//Image parent container is dragable.
		$('#imgContainer').draggable();


		//Image parent container is rotatable.
		$('#imgContainer').rotatable(); 

	   
		$('#rotateButton').click( function() { 
		       $('.ui-rotatable-handle').toggle();
		        
		});
	 	

		//check if check box is checked to allow ratio lock. check!
		$('#ratioCheck').click( function() {
		    if($('#ratioCheck').is(":checked"))
		        ratio =false;
		    else
		        ratio = .75;
		    $(".userImage").resizable('destroy').resizable({
		        aspectRatio: ratio,

		    });
		});
		$(".userImage").resizable({aspectRatio:.75});	
		 

	}); 