<html>
 <head>
 <script>
 function showHint(str) {
 if (str.length==0)   { 
   document.getElementById("txtHint").innerHTML="";
   return;
   }

 
// �̰��� Ajax ó���� �Ͻÿ�.









 }
 </script>
 </head>
 <body>

 <p><b>������ �Է��ϼ���:</b></p>
 <form> 
 ���� �Է�: <input type="text" onkeyup="showHint(this.value)">
 </form>
 <p>�̸�: <span id="txtHint"></span></p>

 </body>
 </html>


