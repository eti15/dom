var new0 = "<li>Пункт 0</li>";

var prepend = function(id, a){
	var con = document.getElementById(id);
	console.log(con, id);
	con.insertBefore(a, con.firstChild);
}
