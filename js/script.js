
	$(window).load(function(){

		var controlPannel = {
		    rotationState : 1,
		    ratioState :  0,
		    previewState : 0,
		    //method to togle states depending on button pressed
		    toggleState: function() {
		        $(':button').click( function() { 
		            if (controlPannel[this.id] == 0 ) {  
		                console.log([this.id] + " to 1");
		                controlPannel[this.id] = 1;
		                var switchValue = this.id;

		            } else {
		                controlPannel[this.id] = 0;
		                console.log([this.id] + " to 0");
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

		 
		//RESIZE default
		$(".userImage").resizable({
			aspectRatio:'preserve',
			minWidth:100,
			minHeight:150,
			handles: 'n, e, s, w'
		});	

		//RESIZE CONTORLER 
		$('#ratioToggle').click( function() {
			  if(controlPannel.ratioState == 1) {
		        ratio =false;
		        $(".userImage").resizable('destroy').resizable({
			        aspectRatio: ratio,
					minWidth:100,
					minHeight:150,
					handles: 'n, e, s, w'
			    });
		    } else {
		        ratio = 'preserve';
			    $(".userImage").resizable('destroy').resizable({
			        aspectRatio: ratio,
					minWidth:100,
					minHeight:150,
					handles: 'n, e, s, w'
			    });
		    }
		});
		
		
		
		$('#previewToggle').click( function() { 
		 


			//set stage to preiveiw mode
		    $('#frame').toggleClass('overflowPreview'); 
		    $('#safeZone').toggleClass('hide');  
		    //grey out other options
			$('#rotationControls').toggleClass('disable'); 
			$('#ratioControls').toggleClass('disable'); 
			$('.ui-resizable-se').toggle();   
		    

			        
		});

	}); 