function testInputBox() {

	/* Here we got the Value from the INPUT box */
  var inputValue = document.getElementById("taskInputBox").value;
  
  /* 
    	Now we need to check for each task: 1,2,3,4 
      To match expression, we need to use string match in javascript:
      https://www.w3schools.com/jsref/jsref_match.asp
  */
  
var str = inputValue;
var result = str.match(/<radio>/g);
if(result!=null) {
	alert('Task 1 Completed');
} else {
  alert('Task 1 Not Completed!')
}
var result1 = str.match(/<checkbox>/g);
if(result1!=null) {
	alert('Task 2 Completed');
} else {
  alert('Task 2 Not Completed!')
}
var result2 = str.match(/<img>/g);
if(result2!=null) {
	alert('Task 3 Completed');
} else {
  alert('Task 3 Not Completed!')
}


 
var result3 = str.match(/<img src="pulpitrock.jpg" alt="Mountain View">/g);
if(result3!=null) {
	alert('Task 4 Completed');
} else {
  alert('Task 4 Not Completed!')
}

  
}
