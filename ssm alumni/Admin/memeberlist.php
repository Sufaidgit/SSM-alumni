<?php
require_once("../conection.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Admin Home</title>
<!-- bootstrap v3.3.7 css -->
        <link rel="stylesheet" href="../css/bootstrap.min.css">
		<!-- responsive css -->
        <link rel="stylesheet" href="../css/responsive.css">
        <!--close    ,, bootstrap v3.3.7 css -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body style="padding-top: 50px;">
<div class="container">
<div class="row">
 <div class="col-sm-12">
  <ul class="nav nav-pills">
    <li><a href="#">Home</a></li>
     <li><a href="candidaterequest.php">Pending</a></li>
     <li><a href="rejuctrequest.php">Rejected</a></li>
     <li  class="active"><a href="acceptrequest.php">Acepted</a></li>
      <li><a href="memeberlist.php">Members List</a></li>
    <li><a href="news.php">News Updation</a></li>
    <li><a href="#">Menu 2</a></li>
    <li><a href="#">Menu 3</a></li>
  </ul>
  </div>
  </div>
  <hr />
  <!--------------- close menu --------->
   <div class="col-sm-12">
  <div class="row">
  <form class="form-inline">
  <div class="form-group">
    <label for="email">Seach By:</label>
    <select name="dpt" class="form-control">
     <option value="">Department</option>
      <option value="Computer">Computer</option>
      <option value="civil">Civil</option>
      <option value="Mechanical">Mechanical</option>
      <option value="Automobile">Automobile</option>
      <option value="Electrical">Electrical</option>
      <option value="Electronics">Electronics</option>
    </select>
  </div>
  <div class="form-group">
    <select name="dpt" class="form-control">
     <option value="">Year</option>
      <?php 
		for ($i=1962;$i<=date('Y');$i++)
		{
	?>
		<option><?php echo $i; ?></option>
	<?php } ?>
    </select>
  </div>
  <div class="form-group">
   <input type="text" class="form-control" placeholder="Name" />
  </div>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="Contact India" />
  </div>
  
  <button type="submit" class="btn btn-default">Search</button>
   <button  type="submit" class="btn btn-info">Print List <i class="fa fa-print" style="font-size:24px"></i></button>
</form>

  </div>
  </div>
  <!----------close search---------------->
  <div class="col-sm-12">
  <div class="row">
  <div class="page-header"><h3>All Members</h3></div>
<div class="table-responsive">
   <table class="table table-bordered ">
    <thead>
      <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Department</th>
        <th>Year (Paasout)</th>
        <th>Stream</th>
        <th>Contact (India)</th>
        <th>Email</th>
         <th>District</th>
        <th>Country Of Employment</th>
        <th>Contact (Aboard)</th>
        <th>Website</th>
      </tr>
    </thead>
    <tbody>
    
     <?php
$i=1;
$qr=mysql_query("select * from registration where status='Accepted'")or die(mysql_error());
if(mysql_num_rows($qr)>0)
{
	while($arra=mysql_fetch_array($qr))
	{
	
	
	
	?>
      <tr>
        <td><?php echo $i; ?></td>
        <td><?php echo $arra[1] ?></td>
        <td><?php echo $arra[2] ?></td>
        <td><?php echo $arra[3] ?></td>
        <td><?php echo $arra[4] ?></td>
        <td><?php echo $arra[5] ?></td>
        <td><?php echo $arra[6] ?></td>
        <td><?php echo $arra[7] ?></td>
        <td><?php echo $arra[8] ?></td>
        <td><?php echo $arra[9] ?></td>
        <td><a href="<?php echo $arra[10] ?>"><?php echo $arra[10] ?></a></td>
      </tr>
      <?php $i++; }} ?>
    </tbody>
  </table>
  </div>
</div>
</div>
</div>
</body>
</html>