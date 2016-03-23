<html>
 <head>
 <script>
 function showHint(str) {
 if (str.length==0)   { 
   document.getElementById("txtHint").innerHTML="";
   return;
   }

 
// 이곳에 Ajax 처리를 하시오.









 }
 </script>
 </head>
 <body>

 <p><b>성씨를 입력하세요:</b></p>
 <form> 
 성씨 입력: <input type="text" onkeyup="showHint(this.value)">
 </form>
 <p>이름: <span id="txtHint"></span></p>

 </body>
 </html>


