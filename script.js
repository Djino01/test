function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let mySkills = [];
		let skills = ['Я владею HTMS', 'Я владею CSS', 'Я владею PHOTOSHOP', 'Я владею AVOCODE'];

		for (let i = 0; i < skills.length; i++) {
			mySkills[i] = alert(skills[i])
		}
	}

	showSkills();

	function checkAge() {
		if(age > 18) {
			alert("Добро пожаловать!");
		} else {
			alert("Мало годиков!");
		}
	}

	checkAge();

	function calcPow(num) {
		alert(num * num);
	}

	calcPow(4);

}

myFirstApp("Evgenii", 22);