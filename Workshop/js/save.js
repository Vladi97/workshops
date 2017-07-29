var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}


function save() {
	debugger;
	var user = {
		"name": document.getElementById("name").value,
		"lastname": document.getElementById("lastname").value,
		"email": document.getElementById("email").value,
		"phone": document.getElementById("phone").value
	};
	users.push(user);
	localStorage.setItem('users', JSON.stringify(users));
}