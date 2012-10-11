//javascript

//wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    function getTats(){
        var formTag = document.getElementsByTagName('form'),
            selectLi = $('select'),
            makeSelect = document.createElement('select');
            makeSelect.setAttribute("id", "groups");
	for(var i=0, j=styleGroups.length; i<j; i++){
            var makeOption = document.createElement('option');
	    var optText = styleGroups[i];
            makeOption.setAttribute("value", optText);
	    makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }
    
    
    function getSelectedRadio(){
        var radios = document.forms[0].sex;
        for(var i=0; j=radios.length; i++){
            if(radios[i].checked){
                sexValue = radios[i].value;
            }
        }
    }
    
    function storeData(){
        var id             = Math.floor(math.random()*1000000001);
        getSelectedRadios();
        var item        = {};
            item.fname  = ["First Name:", $('fname').value];
            item.lname  = ["Last Name:", $('lname').value];
            item.email  = ["Email:", $('email').value];
            item.sex    = ["Sex:", sexValue];
            item.url	= ["Website:", $('url').value];
            item.date   = ["Date:", $('date').value];
            item.pain   = ["Pain Tolerance:", $('pain').value];
            item.comment= ["Comments:", $('comments').value];
       
        localStorage.setItem(id, JSON.stringify(item));
        alert("Tattoo Appointment Made!");        
    };
    getData(){
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
    var styleGroups = ["--Choose A Style--", "Color", "Black & White", "Outline"];   
	sexValue;
    getTats ();
    
    
  
    var save = $('submit');
    save.addEventListener("click", storeData);
    });








