let selectedPart = null;

document.querySelectorAll(".dropdown .content a").forEach(link => {
		link.addEventListener(".click", function (e) {
  		e.preventDefault();
    	selectedPart = this.textContent;
    	alert("Selected part: " + selectedPart);
    });
});
 
document.querySelectorAll(".dropdown2 .content a").forEach(link => {
 		link.addEventListener("click", function (e) {
  			e.preventDefault();
  			const selectedColor = this.textContent;
  
 		 		if (selectedPart) {
  					alert("Applied " + selectedColor + " to " + selectedPart + "!");
   	 		} else {
    				alert("Please select a body part first!");
     		}
  	});
});
