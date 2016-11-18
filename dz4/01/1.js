var prepend = function(id, a){
	var con = document.getElementById(id),
		newLi = document.createElement('li');
  	newLi.innerHTML = a;
	con.insertBefore(newLi, con.firstChild);
}
