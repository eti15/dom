var opendiv = function(e){
	var titlediv = e.target.parentNode;
	if(!titlediv.classList.contains('title')) return;
	
	e.target.classList.toggle('title_a');
	
	if(titlediv.nextElementSibling.classList.contains('text')){
		current = null;
		titlediv.nextElementSibling.classList.toggle('text');
	} else {
		if(current){
			current.nextElementSibling.classList.toggle('text');
			current.childNodes[1].classList.toggle('title_a');
		}
		current = titlediv;
		current.nextElementSibling.classList.toggle('text');
	}
}