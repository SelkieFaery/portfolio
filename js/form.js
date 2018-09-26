//Function called when submit button is clicked.
function validateForm() {
//Variable for first name
var firstName = document.getElementById("fName").value;
//Variable for last name
var lastName = document.getElementById("lName").value;
//Variable for city
var city = document.getElementById("city").value;
//Variable for zip code
var zipCode = document.getElementById("zip").value;
//Variable for address
var address = document.getElementById("address").value;
//Variable for area code
var area = document.getElementById("areaCode").value;
//Variable for phone number
var phone = document.getElementById("phoneNumber").value;
//Variable for email address
var email1 = document.getElementById("email1").value;
//Variable for contact methods
var checkboxs=document.getElementsByName("contMeth");
//Variable for loop in checkboxes
var okay=false;
//Variable for array in checkbox loop
var count = 0;

	//Tests if the value for first name is default value
    if (document.getElementById("fName").value == "First Name") {
	//alert if value is default value for first name
        alert("Please enter your first name");
        return false;
    }
	//Tests if the value for first name is anything other than a letter a-z
    if (!firstName.match(/^[a-zA-Z]+$/))
    {
	//Alert of incorrect character is used in first name
        alert("Please use only letters A - Z for first name");
        return false;
    }

	//Tests if value of city is blank
    if (document.getElementById("city").value === "") {
	//Allerts user to enter city
        alert("Please enter your city");
        return false;
    }
	//Tests if the value for city is anything other than a letter a-z
    if (!city.match(/^[a-zA-Z]+$/))
    {
	//Alert of incorrect character is used for city
        alert("Please use only letters A - Z for city");
        return false;
    }

	//Tests if value for area code is blank
    if (document.getElementById("areaCode").value === "") {
	//Alerts user to enter area code
        alert("Please enter your area code");
        return false;
    }
	//Tests if 3 numbers are used for area code or if characters other than numbers were entered
    if (!area.match(/(^\d{3}$)|(^\d{3}-\d{2}$)/))
    {
	//Alerts user to enter exactly 3 numbers for area code
        alert("Please enter a valid 3 digit area code.");
        return false;
    }
	//Tests of value of phone number is blank
    if (document.getElementById("phoneNumber").value === "") {
	//Alerts user to enter phone number
        alert("Please enter your phone number");
        return false;
    }
	//Tests if 37 numbers are used for phone or if characters other than numbers were entered
    if (!phone.match(/(^\d{7}$)|(^\d{7}-\d{6}$)/))
    {
	//Alerts user to enter exactly 7 numbers for area code
        alert("Please enter a valid 7 digit phone number.");
        return false;
    }
    if (document.getElementById("email1").value === "") {
        alert("Please enter your e-mail address");
        return false;
    }
	//Tests if email is valid
    if (!email1.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    {
	//Alerts user if invalid email is used
        alert("You have entered an invalid e-mail address");
        return false;
    }
	//Tests if value of confirmation email is blank
    if (document.getElementById("email2").value === "") {
	//Alerts user to confirm email address
        alert("Please confirm your email address");
        return false;
    }
	//Compares value of email address to value of confirmation email address
    if (!email1.match(document.getElementById("email2").value)) {
	//Alerts user if email addresses do not match
        alert("Confermation email does not match");
        return false;
    }

    //loops through all options for contact methods
      for(var i=0,l=checkboxs.length;i<l;i++) {
  	//checks each option for if it is checked or not
          if(checkboxs[i].checked) {
  		//counts each check box checked
              count++;
          }
      }
  	//tests if more than one check box is checked for contact method
          if(count > 0){
              okay=true;
          }
          if(!okay){
  		//Alert if less than two contact methods were selected
              alert("Please choose at least one contact method");
              return false;
          }
      }
//function that sets default value when not selected, if no other value is input
//Sets default value for first and last name
function onBlur(el) {
	//checks if value is blank
    if (el.value === '') {
	//sets default value if blank
        el.value = el.defaultValue;
    }
}

//function that clears the default value when selected
//clears default value when first or last name is clicked
function onFocus(el) {
	//checks if value is default value
    if (el.value == el.defaultValue) {
	//clears value if default
        el.value = '';
    }
}
//function that resets form when reset button is clicked
function reset() {
	//resets form
    document.getElementById("myForm").reset();
}




