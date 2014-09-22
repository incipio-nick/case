
	$(window).load(function(){
		var switchValue;
		var controlPannel = {
			rotationState : 1,
			ratioState :  1,
			previewState : 0,	
		    //method to togle states depending on button pressed
		    toggleState: function() {
		        $(':button').click( function() { 

		            switchValue =[this.id].toString(); 

		            switch(switchValue) {

					    case "rotateToggle": 
					    	if (controlPannel.rotationState == 1) {
					    		console.log("rotateToggle oFF WAS 1 NOW 0");
					    		controlPannel.rotationState = 0;
					    	} else {
					    		console.log("rotateToggle oN WAS 0 NOW 1");
					    		controlPannel.rotationState = 1;
					    	}
					    	rotateToggle();
					        break;

					    case "ratioToggle": 
					    	if (controlPannel.ratioState == 0) {
					    		console.log("ratioToggle on");
					    		controlPannel.ratioState = 1;
					    	} else {
					    		console.log("ratioToggle off");
					    		controlPannel.ratioState = 0;
					    	}

					    	ratioToggle();
					        break;

					    default:  
					  		if (controlPannel.previewState == 0) { 
					    		controlPannel.previewState = 1; 
					    	} else { 
					    		controlPannel.previewState  =0;
					    	}
					    	previewToggle();
					        break;
					}  

		        });
		    }
		}
		
		controlPannel.toggleState();  

		//Image parent container is dragable.
		$('#imgContainer').draggable();

		//Image parent container is rotatable.
		$('#imgContainer').rotatable(); 
	   
	    //ROTATION
	    var rotateToggle = function () {
			$('.ui-rotatable-handle').toggle();  
		}

		 
		//RESIZE default ratio settings
		$(".userImage").resizable({
			aspectRatio:'preserve',
			minWidth:100,
			minHeight:150 
		});	

		//RESIZE CONTORLER 
		var ratioToggle = function() {
			  if(controlPannel.ratioState == 1) {
		        ratio =false;
		        $(".userImage").resizable('destroy').resizable({
			        aspectRatio: ratio,
					minWidth:100,
					minHeight:150 
			    });
		    } else {
		        ratio = 'preserve';
			    $(".userImage").resizable('destroy').resizable({
			        aspectRatio: ratio,
					minWidth:100,
					minHeight:150 
			    });
		    }
		};
		
		
		
		var previewToggle = function() { 

		 	if (controlPannel.previewState == 1) {
				console.log("preview turned ON"); 
				if (controlPannel.rotationState == 1) {
					rotateToggle();
					controlPannel.rotationState = 0; 
				}
				$('#imgContainer').draggable('destroy');
		 	} else { 
				if (controlPannel.rotationState == 0) {
					if (controlPannel.rotationState == 0) {
					 rotateToggle();
						controlPannel.rotationState = 1;
					}
				} 
				$('#imgContainer').draggable();
		 	}
 
				  

			//set stage to preiveiw mode
		    $('#frame').toggleClass('overflowPreview'); 
		    $('#safeZone').toggleClass('hide');  
		    //grey out other options
			$('#rotationControls').toggleClass('disable'); 
			$('#ratioControls').toggleClass('disable'); 
			$('.ui-resizable-se').toggle();   
		         
		};


	}); 