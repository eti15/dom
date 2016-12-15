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

for(var i=0; i<carr.length; i++){
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

var ins = document.querySelectorAll('#cooadd input');

var cooAdd = function(e){
	for(let a=0; a<3; a++){
		if(!ins[a].value){
			alert('Заполните все поля формы');
			return;
		}
	}
	let today = new Date(), lastDay;
	let exp = ins[2].value * 24 * 60 * 60 * 1000;
	//lastDay = today.setMilliseconds(exp);
	//today.setTime(lastDay);
	
	let srok = today.getTime() + exp;
	//today.setTime(srok);
	today = new Date(srok).toUTCString();

	let newCoo = ins[0].value + '=' + ins[1].value + ';' + 'expires=' + today;
	console.log(newCoo);
	document.cookie = newCoo;

	let newTr = document.createElement('tr');
	for(let j=0; j<3; j++){
		let newTd = document.createElement('td');
		if(j!=2) newTd.textContent = ins[j].value;
		else {
			let newBut = document.createElement('button');
			newBut.textContent = "Удалить";
			newBut.setAttribute('number', i);
			newTd.appendChild(newBut);
		}
		ins[j].value = '';
		newTr.appendChild(newTd);
	}
	newTr.id = 'i' + i++;
	cootab.appendChild(newTr);
}

var addButton = document.getElementById('addButton');
addButton.addEventListener('click', cooAdd);