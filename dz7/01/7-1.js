var cookies,	// строка с куками
	carr;	// массив для значений кук

console.log('Куки до:', document.cookie);

document.cookie = "user=eti";
document.cookie = "m=true";
document.cookie = "city=Москва";

cookies = document.cookie;
console.log('Куки после:', cookies);


carr = cookies.split('; ');	// 1-мерный массив с куками
//console.log(carr);

var cootab = document.getElementById('cootab');

for(let i=0; i<carr.length; i++){
	let newTr = document.createElement('tr');
	carr[i] = carr[i].split('=');	// 2-мерный массив с куками
	for(let j=0; j<3; j++){
		let newTd = document.createElement('td');
		if(j!=2) newTd.textContent = carr[i][j];
		else {
			let newBut = document.createElement('button');
			newBut.textContent = "Удалить";
			newBut.setAttribute('number', i);
			newTd.appendChild(newBut);
		}
		newTr.appendChild(newTd);
	}
	newTr.id = 'i' + i;
	cootab.appendChild(newTr);
}

var cooDel = function(e){
	if(event.target.tagName != 'BUTTON') return;
	let cBut = event.target,
		num = cBut.getAttribute('number'),
		yon = confirm('Удалить куку с именем < ' + carr[num][0] + ' > ?');

	if(yon){
		document.cookie = carr[num][0] + "=" + carr[num][1] + ";" + "expires=Thu, 01-Jan-70 00:00:01 GMT";
		let delTr = document.getElementById('i'+num);
		cootab.removeChild(delTr);
	}

	console.log('Обновлённый перечень кук:', document.cookie);
}

cootab.addEventListener('click', cooDel);