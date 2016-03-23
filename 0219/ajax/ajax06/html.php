<html>
 <head>
 <script>
 function showNAME(str) {
	 if (str=="")   {
   document.getElementById("txtHint").innerHTML="";
   return;
   } 



// 이곳에 Ajax 처리를 하시오.









 }
 </script>
 </head>
 <body> 

 <form>
 Select a CD:
 <select name="cds" onchange="showNAME(this.value)">
 <option value="">Select NAME : </option>
 <option value="Lee Bo Young">Lee Bo Young</option>
 <option value="Um Ji Won">Um Ji Won</option>
 <option value="Lee Min Jeong">Lee Min Jeong</option>
 <option value="O Ji Eun">O Ji Eun</option>
 <option value="Su Ji">Su Ji</option>
 <option value="I U">I U</option>
 </select>
 </form>
<div id="txtHint"><b>Name info will be listed here...</b></div>

 </body>
 </html>



