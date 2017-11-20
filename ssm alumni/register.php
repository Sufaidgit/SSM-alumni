<?php
require_once("conection.php");
// Registration Form Code
if(isset($_POST['rgister']))
{
	$name=$_POST['user'];
	$dpt=$_POST['department'];
	$year=$_POST['year']; 
	$stream=$_POST['stream'];
	$contact=$_POST['contact'];
	$email=$_POST['email'];
	$district=$_POST['city'];
	$country=$_POST['country'];
	$acontact=$_POST['acontact'];
	$url=$_POST['url'];
	$status="Under Verification";
	if(strlen($acontact)<6)
	{
		$acontact=NULL;
	}
	mysql_query("insert into registration(name,department,year,stream,contact,email,district,e_country,a_contact,website,status) values ('$name','$dpt','$year','$stream','$contact','$email','$district','$country','$acontact','$url','$status')")or die(mysql_error());
?>
  <script type="text/javascript">
alert("Value Inserted")
//window.location="login.php"
  </script>
  
  <?php }
  // Close Registration Code
  
  ?>

