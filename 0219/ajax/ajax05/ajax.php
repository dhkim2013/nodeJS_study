<?php
 // �迭(array)�� ���� ����ϴ�.
 $a[]="������";
 $a[]="����";
 $a[]="������";
 $a[]="������";
 $a[]="������";
 $a[]="��ȿ��";
 $a[]="�賲��";
 $a[]="��ȿ��";
 $a[]="����ȿ";
 $a[]="�տ���";
 $a[]="������";
 $a[]="����";
 $a[]="������";
 $a[]="�̳���";
 $a[]="������";
 $a[]="�Ӽ���";
 $a[]="������";
 $a[]="������";
 $a[]="��ȿ��";
 $a[]="�ֿ���";
 $a[]="�̿���";
 $a[]="�����";
 $a[]="�տ���";
 $a[]="��ȿ��";
 $a[]="����";
 $a[]="���Ѻ�";
 $a[]="�ڼ���";
 $a[]="������";
 $a[]="���ϼ�";
 $a[]="������";

 //get the q parameter from URL
 $q=$_GET["q"]; // ajax_form.php ���� 'q'��� ������ �Ѿ�� ���� �޴� �κ�

 // �Էµ� ���� �ִ��� üũ�ϴ� ����(������ ���̰� 0���� ũ�Ķ�� �ǹ�)
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

 // ���� ��ġ�Ǵ� ���� ������ "no suggestion" �� ����ϰ� ���� ������ �̸� ��ü�� ����մϴ�.
 if ($hint == "")   {
   $response="no suggestion";
   }
 else   {
   $response=$hint;
   }

 // ���� �����
 echo iconv("euc-kr","utf-8",$response);  // �ѱ��� ������ euc-kr�� ���� ��ȯ��
 ?>


