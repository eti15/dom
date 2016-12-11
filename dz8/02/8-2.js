var headerInfo = document.getElementById('headerInfo'),
	trList = document.getElementById('trList'),
	shab,
	shabFun,	// функция-компилятор Handlebars
	today = new Date(),	// текущая дата
	friends = [];	// массив для отсортированных данных фрэндов


new Promise(function(resolve) {
  if (document.readyState === 'complete') {
    resolve();
  } else {
    window.onload = resolve;
  }
}).then(function() {
  shab = document.getElementById('shab');
  shabFun = Handlebars.compile(shab.innerHTML);
  // инициализация приложения
  return new Promise(function(resolve, reject) {
    VK.init({
      apiId: 5763917
    });

    VK.Auth.login(function(response) {	// авторизация
      if (response.session) {
        resolve(response);
      } else {
        reject(new Error('Не удалось авторизоваться'));
      }
    }, 2);	// доступ к друзьям
  });
}).then(function() {
  return new Promise(function(resolve, reject) {
    VK.api('users.get', {'name_case': 'gen'}, function(response) {
      if (response.error) {
        reject(new Error(response.error.error_msg));
      } else {
        headerInfo.textContent = 
        `Друзья ${response.response[0].first_name} ${response.response[0].last_name}`;
        resolve();
      }
    });
  })
}).then(function() {
  return new Promise(function(resolve, reject) {
    VK.api('friends.get', {'fields': 'bdate, photo_50, age'}, function(response) {
      if (response.error) {
        reject(new Error(response.error.error_msg));
      } else {
        var len = response.response.length;
        for(let i=0; i<len; i++){
        	let item = response.response[i];
        	if(item.bdate){		// если указана дата рождения
        		let d3 = item.bdate.split('.');
        		if(d3[2]){		// если указан или не скрыт год рождения
        			let dateObj = new Date(d3[2], d3[1]-1, d3[0]);
        			dateObj = today - dateObj;
        			item.age = parseInt(dateObj / 1000 / 60 / 60 / 24 / 365);
        			let dayNum = d3[0] * (d3[1]-1);
        		}
        		else item.age = null;
        	
        	let dateObj = new Date(today.getFullYear(), d3[1]-1, d3[0]);
        	item.delta = parseInt((dateObj - today) / 1000 / 60 / 60 / 24);

        	} else {
        		item.age = null;
        		item.delta = null;
        	}
        }

        // сортировка по дате
        var minInd, j = 0;
        for(let a = 1; a>-2 ; a-=2){
	        while(len){
	        	for(var i=0, min = 999; i<len; i++){
	        		let dlt = response.response[i].delta;
	        		if(a>0 && dlt<0 || a<0 && dlt>=0 || dlt == null) continue;
	        		if(dlt < min){
	        			min = dlt;
	        			minInd = i;
	        		}
	        	}
	        	if(min == 999) break;
	        	friends[j++]=response.response[minInd];
	    		response.response.splice(minInd, 1);
	    		len--;
	    	}
    	}
        //trList.innerHTML = shabFun({list: response.response});
        trList.innerHTML = shabFun({list: friends});
        resolve();
      }
    });
  })
});

