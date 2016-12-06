var headerInfo = document.getElementById('headerInfo'),
	trList = document.getElementById('trList'),
	shab,
	shabFun;	// функция-компилятор Handlebars


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
        console.log(response.response[0]);
        trList.innerHTML = shabFun({list: response.response});
        resolve();
      }
    });
  })
});
