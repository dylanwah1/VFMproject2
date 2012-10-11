//javascript

//wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	function $(x) {
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	function getTats(){
		var formTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups);
			var makeOption = document.createElement('option');
			makeOption.setAttribute("value");
			makeSelect.appendChild(makeOption);
		}
		selectLi.appendChild(makeSelect);
	}
	
	function getSelectedRadio(){
		var radios = document.forms[0].sex;
		for(var i=0; i<radios.length; i++){
			if(radios[i].checked){
				sexValue = radios[i].value;
			}
		}
	}
	
	function storeData(){
		var id 			= Math.floor(math.random()*1000000001);
		//gather up all form values and store in an object
		//Object properties contain array with the form label and input values
		getSelectedRadios();
		var item		= {};
			item.fname	= ["First Name:", $('fname').value];
			item.lname 	= ["Last Name:", $('lname').value];
			item.email	= ["Email:", $('email').value];
			item.sex	= ["Sex:", sexValue];
			item.url= ["Website:", $('url').value];
			item.date	= ["Date:", $('date').value];
			item.pain	= ["Pain Tolerance:", $('pain').value];
			item.comment= ["Comments:", $('comments').value];
		//save data into Local Storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Tattoo Appointment Made!");		
	}
	var sexValue;
	getTats();
	/*function getData(){
		var makeDiv = document.createElement('div');
		makeDiv/setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
	*/
	
	
	//Set link and submit click events
	/*var displayLink = $('displayLink');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);*/
	var save = $('submit');
	save.addEventListener("click", storeData);
	








});