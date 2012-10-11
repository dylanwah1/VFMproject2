//javascript

//wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

    function $(x) {
        var theElement = document.getElementById(x);
        return theElement;
    }
    
    function getTats(){
        var formTag = document.getElementsByTagName("form"),
            selectLi = $('dropDown'),
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
        for(var i=0; i<radios.length; i++){
            if(radios[i].checked){
                sexValue = radios[i].value;
            }
        }
    }
    
    function toggleControls(n){
		switch(n){
			case "on":
				$('itemForm').style.display = "none";
				$('clearData').style.display = "inline";
				$('displayData').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('itemForm').style.display = "block";
				$('clearData').style.display = "inline";
				$('displayData').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;		

		}
	}

    
    function storeData(){
        var id             = Math.floor(Math.random()*1000000001);
        getSelectedRadio();
        var item        = {};
	    item.style  = ["Style:", $('groups').value];
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
    }
    
   function getData(){
		toggleControls("on");
		if(localStorage.length === 0){
			alert("There are no items saved!");
		}
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
//Convert string from local storage value back to object using JSON.parse
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;

			}

		}
	}

	function deleteData(){
		if(localStorage.length === 0){
			alert("There is no data to clear!");

		}else{
			localStorage.clear();
			alert("All Items Have Been Deleted!");
			window.location.reload();
			return false;
		}
	}
    var styleGroups = ["--Choose A Style--", "Color", "Black & White", "Outline"];   
    var	sexValue;
    getTats ();
        var displayData = $('displayData');
	displayData.addEventListener("click", getData);
	var clearData = $('clearData');
	clearData.addEventListener ("click", deleteData);    
	var save = $('submit');
	save.addEventListener("click", storeData);
    });








