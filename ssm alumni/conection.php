<?php
$con=mysql_connect("localhost","root","root");
if(!$con)
{
echo "error in connection";
} 
else
{
mysql_select_db("ssm_alumni",$con);
}
?>