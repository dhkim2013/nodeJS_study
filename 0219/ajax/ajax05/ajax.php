<?php
 // 배열(array)에 값을 담습니다.
 $a[]="김태희";
 $a[]="김희선";
 $a[]="김혜수";
 $a[]="고현정";
 $a[]="구혜선";
 $a[]="공효진";
 $a[]="김남주";
 $a[]="민효린";
 $a[]="송지효";
 $a[]="손예진";
 $a[]="송혜교";
 $a[]="서우";
 $a[]="엄지원";
 $a[]="이나영";
 $a[]="오윤아";
 $a[]="임수정";
 $a[]="전지현";
 $a[]="조여정";
 $a[]="이효리";
 $a[]="최여진";
 $a[]="이연아";
 $a[]="남상미";
 $a[]="손연재";
 $a[]="한효주";
 $a[]="수지";
 $a[]="박한별";
 $a[]="박수미";
 $a[]="고준희";
 $a[]="박하선";
 $a[]="아이유";

 //get the q parameter from URL
 $q=$_GET["q"]; // ajax_form.php 에서 'q'라는 변수로 넘어온 값을 받는 부분

 // 입력된 값이 있는지 체크하는 구문(글자의 길이가 0보다 크냐라는 의미)
 if (strlen($q) > 0)   {
   $hint="";
   for($i=0; $i<count($a); $i++)     {
     if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))       {
       if ($hint=="")         {
         $hint=$a[$i];
         }
       else         {
         $hint=$hint." , ".$a[$i];
         }
       }
     }
   }

 // 성과 일치되는 값이 없으면 "no suggestion" 을 출력하고 값이 있으면 이름 전체를 출력합니다.
 if ($hint == "")   {
   $response="no suggestion";
   }
 else   {
   $response=$hint;
   }

 // 값을 출력함
 echo iconv("euc-kr","utf-8",$response);  // 한글이 깨져서 euc-kr로 값을 변환함
 ?>



