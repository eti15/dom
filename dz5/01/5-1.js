var opendiv = function(e){
	var titlediv = e.target.parentNode;
	if(titlediv.classList.contains('title')){
		e.target.classList.toggle('title_a');
		titlediv.nextElementSibling.classList.toggle('text');
		console.log(titlediv.nextElementSibling);
	}
}