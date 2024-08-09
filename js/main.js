import game from './game.js';



const btn_login = document.querySelector("#btn_login");
const input_login = document.querySelector("#input_login");
const box_form = input_login.parentNode;

const _PSW_ = "dai14042024";


function validation_psw () {
	return (input_login.value.toUpperCase() == _PSW_.toUpperCase());
}


input_login.addEventListener('input',()=> {
	if (!validation_psw()) {
		input_login.parentNode.style = 'box-shadow: 0 0 6px red;';
	} else if (validation_psw()) {
		input_login.parentNode.style = 'box-shadow: 0 0 6px green;';
	} else if (input_login.value == "") {
		input_login.parentNode.style = '';
	}
});

btn_login.addEventListener('click',()=> {
	if (validation_psw()) {
		box_form.innerHTML = 'Bienvenida Dairi S. Guanipa.';
		box_form.style = 'border: none;';
	}
});