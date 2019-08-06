;(function(){
	"use strict";



	let login = prompt('Hi! Enter your login:', '');

	if (login && login.toLowerCase() == 'Admin'.toLowerCase()){
		let pass = prompt('Ok! Now enter your password:', '');

		if (pass && pass.toLowerCase() == 'Admin'.toLowerCase()){
			alert('Glad to see you!');
		}
		else if (pass == '' || pass == null){
			alert('Login canceled');
		} 
		else {
			alert('That password is incorrect. Try again!');
		};

	} 

	else if (login == '' || login == null){
		alert('Login canceled');
	} 

	else {
		alert('I don\'t know you');
	};


})();